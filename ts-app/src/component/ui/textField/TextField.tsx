import React, { useEffect, useRef } from "react";

import "./TextField.scss";

type PropsType = {
    autofocus?: boolean
    label: string
    type?: string
    value?: string
    setValue: (value: string) => void
}

const TextField: React.FC<PropsType> = ({
        autofocus,
        label,
        type="text",
        value,
        setValue
    }) => {
    
    const nameRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        if (autofocus) {
            nameRef.current?.focus();
        }
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <div className="text-field-container">
            <div className="label">
                {label}
            </div>
            <input
                ref={nameRef}
                value={value || ""}
                onChange={handleChange}
                className="input"
                type={type}
            />
        </div>
    )
}

export default TextField;

