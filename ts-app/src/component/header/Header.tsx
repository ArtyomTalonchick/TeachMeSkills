import React from "react";
import Timer from "../timer/Timer";
import useTranslate from "../hooks/useTranslate";
import { Link, NavLink } from "react-router-dom";
import Username from "./username/Username";
import { useSelector } from "../hooks/useSelector";
import { useActions } from "../hooks/useActions";


import "./Header.scss";
import { ReactComponent as LogoIcon} from "../../assets/logo.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";
import { ReactComponent as LoginIcon } from "../../assets/login.svg";

const LINKS = [
    { url: "/registration", text: "Registration" },
    { url: "/posts", text: "Posts" },
    { url: "/myposts", text: "My Posts" },
]

const Header: React.FC = () => {
    const { lang, setLang } = useTranslate();
    const nextLang = lang === "en" ? "ru" : "en";

    const logged = useSelector(state => state.auth.logged);
    const { logout } = useActions();

    const handleLogout = () => {
        logout();
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
               {LINKS.map(({ url, text }) => 
                    <li key={url + text}>
                        <NavLink to={url} className={({ isActive }) => isActive ? "_active" : ""}>
                            {text}
                        </NavLink>
                    </li>
               )}
            </ul>

            <div className="controls">
                {logged ? 
                <>
                    <Username/>
                    <LogoutIcon
                        className="icon-button logout-button"
                        onClick={handleLogout}
                    />
                </>
                :
                <Link to="/login">
                    <LoginIcon
                        className="icon-button logout-button"
                        onClick={handleLogout}
                    />
                </Link>
                }
                <Timer/>
                <button
                    className="lang-buttun"
                    onClick={() => setLang(nextLang)}
                >
                    {nextLang}
                </button>
            </div>
         
        </nav>
    )
}

export default Header;