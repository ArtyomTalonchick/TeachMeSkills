import React from "react";

import "./TextField.scss";

type PropsType = {
    label: string
    type?: string
    value: string
    setValue: (v: string) => void
}

const TextField: React.FC<PropsType> = ({
        label,
        type="text",
        value,
        setValue,
    }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <div className="text-field-container">
            <div className="label">
                {label}
            </div>
            <input
                value={value}
                onChange={handleChange}
                className="input"
                type={type}
            />
        </div>
    )
}

export default TextField;