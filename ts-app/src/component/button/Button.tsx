import React from "react";
import styles from "./Button.module.scss";


type PropsType = {
    color: string
    text?: string
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<PropsType> = ({ 
        color,
        text="Click Me",
        handleClick,
    }) => {

    const classNames = [styles.buttonTheme];
    console.log(styles[color as string]);

    if (color !== "red") {
        classNames.push(styles[color]);
    }

    return (
        <button
            className={classNames.join(" ")} onClick={(e) => handleClick(e)}
        >
            {text}
        </button>
    )
}

export default Button;