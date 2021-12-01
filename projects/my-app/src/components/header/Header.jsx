import React from "react";
import "./Header.scss";

function Header () {
    return (
        <>
            <a href="/home" className="header__link">Home</a>
            <a href="/about" className="header__link">About</a>
        </>
    )
}

export default Header;