import React, { useEffect, useState } from "react";

import { ReactComponent as ThemeIcon } from "../../../assets/theme.svg";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";


const ThemeControl: React.FC = () => {

    const theme = useSelector(state => state.auth.theme);
    const { toggleTheme } = useActions();

    

    const handleClick = () => {
        toggleTheme();
    }

    return (
        <div className="header-theme">
            {theme}
            <ThemeIcon onClick={handleClick}/>
        </div>
    )
}

export default ThemeControl;