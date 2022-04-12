import { useState, useEffect } from 'react';
import en from "../../translations/en.json";
import ru from "../../translations/ru.json";

type TranslateType = {
    [prop: string]: string
}

type TranslatesType = {
    [prop: string]: TranslateType    
}

const translates: TranslatesType = { en, ru };

let lang:string = localStorage.getItem("lang") || "en";

// массив callbacks'ов - нужно вызвать каждый при измении языка
let callbacks: Array<(lang: string) => void> = [];

const useTranslate = () => {

    const [langState, setLangState] = useState<string>(lang);
    // 1. Когда рендериться компонент
    //    1.1. получить актуальный язык
    //    1.2. получать обновления
    // 2. Иметь возможноть изменить язык
    //    2.1. обновить глобальную переменную, для 1.1.
    //    2.2. проинформировать все компоненты об изменении, для 1.2.

    useEffect(() => {
        // подписываемся на обновления языка
        callbacks.push(setLangState);

        return () => {
            // отписывать от обновления языка
            callbacks = callbacks.filter((f) => f !== setLangState);
        }
    }, []);

    const setLang = (_lang: string) => {
        lang = _lang;
        localStorage.setItem("lang", lang);
        callbacks.forEach((callback) => callback(lang));
    }

    const t = (id: string) => {
        const translate = translates[langState];
        return translate[id] ?? id;
    }

    return {
        lang: langState,
        setLang,
        t,
    }
}

export default useTranslate;