import React, { useEffect, useState } from "react";

import "./Header.scss";
import { ReactComponent as Logo} from "../../assets/logo.svg";

const Header: React.FC = () => {
    return (
        <nav className="header-container">
            <div className="logo">
                <Logo/>
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

            </div>
         
        </nav>
    )
}

export default Header;