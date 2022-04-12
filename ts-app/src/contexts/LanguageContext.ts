import React from 'react';

type ContextType = {
    lang: string
    setLang: (callback: (prevValue: string) => string) => void
}


const LanguageContext = React.createContext<ContextType>({
    lang: "ru",
    setLang: () => {},
});

export default LanguageContext;