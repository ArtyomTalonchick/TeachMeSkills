import React, { useEffect, useState } from "react";
import Timer from "../timer/Timer";

import "./Header.scss";
import { ReactComponent as LogoIcon} from "../../assets/logo.svg";

const Header: React.FC = () => {
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
                <Timer/>
            </div>
         
        </nav>
    )
}

export default Header;