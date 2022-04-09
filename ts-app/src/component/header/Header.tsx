import React, { useContext, useEffect, useState } from "react";
import Timer from "../timer/Timer";

import "./Header.scss";
import { ReactComponent as LogoIcon} from "../../assets/logo.svg";
import LanguageContext from "../../contexts/LanguageContext";

const Header: React.FC = () => {

    const { lang, setLang } = useContext(LanguageContext);


    const toggleLang = () => {
        setLang((prevValue: any) => prevValue === "en" ? "ru" : "en");
    }

    return (
        <nav className="header-container">
            <div className="logo">
                <LogoIcon/>
                <div className="app-name">
                    Blog Online
                </div>
            </div>

            <ul className="links">
                <li>
                    <a href="/">Posts</a>
                </li>
                <li>
                    <a href="/">My posts</a>
                </li>
            </ul>

            <div>
                <div>
                    {lang}
                </div>
                <button onClick={toggleLang}>
                    Toggle lang
                </button>

                <Timer/>
            </div>
         
        </nav>
    )
}

export default Header;