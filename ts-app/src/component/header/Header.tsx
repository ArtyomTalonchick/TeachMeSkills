import React from "react";
import Timer from "../timer/Timer";

import "./Header.scss";
import { ReactComponent as LogoIcon} from "../../assets/logo.svg";
import useTranslate from "../hooks/useTranslate";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    const { lang, setLang } = useTranslate();

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
                    <NavLink to="/login" className={({ isActive }) => isActive ? "_active" : ""}>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/registration" className={({ isActive }) => isActive ? "_active" : ""}>
                        Registration
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/posts" className={({ isActive }) => isActive ? "_active" : ""}>
                        Posts
                    </NavLink>
                </li>
            </ul>

            <div>
                {lang === "en"
                    ?
                        <button onClick={() => setLang("ru")}>
                            ru
                        </button>
                    :
                        <button onClick={() => setLang("en")}>
                            en
                        </button>
                }
                <Timer/>
            </div>
         
        </nav>
    )
}

export default Header;