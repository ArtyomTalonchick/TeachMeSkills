import "./Button.scss";

type PropsType = {
    color: string
    text?: string
    handleClick: any
}

const Button = ({ 
    color,
    text="Click Me",
    handleClick,
    }: PropsType) => {

    return (
        <button className={`button-theme _${color}`} onClick={handleClick}>
            {text}
        </button>
    )
}

export default Button;