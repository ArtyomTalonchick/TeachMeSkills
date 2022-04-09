import React from "react";

import "./Button.scss";

type PropsType = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<PropsType> = ({
    onClick,
    children
}) => {

    return (
        <button className="button-container" onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;