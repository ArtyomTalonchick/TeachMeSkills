import { useState, useEffect } from "react";
import { translatesEn } from "../components/resources/translates/translates.en";
import { translatesRu } from "../components/resources/translates/translates.ru";

const locales = {
    "en": translatesEn,
    "ru": translatesRu,
}

const subscribes = [];

let globalLanguage = "en";


const setGlobalLanguage = (lang) => {
    if (globalLanguage === lang) return;

    globalLanguage = lang;
    subscribes.forEach(subscribe => subscribe(globalLanguage))
};

const translate = (textId) => locales[globalLanguage][textId] || textId;

export const withTtranslator = (Component) => (props) => {
    const [language, setLanguage] = useState(globalLanguage);


    useEffect(() => {
        const f = (lang) => setLanguage(lang);
        subscribes.push(f);

        return () => {
            const i = subscribes.findIndex(f);
            subscribes.splice(i, 1);
        }
    }, [])

    return (
        <Component 
            translate={translate}
            language={language}
            setLanguage={setGlobalLanguage}
            {...props}
        />
    );
}