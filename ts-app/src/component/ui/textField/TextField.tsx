import React, { useEffect, useRef } from "react";
import FormValuesType from "../../../types/formValuesType";

import "./TextField.scss";

type PropsType = {
    autofocus?: boolean
    label: string
    type?: string
    name: string
    values: FormValuesType
    setValues: (callback: (prevValue: FormValuesType) => FormValuesType) => void
}

const TextField: React.FC<PropsType> = ({
        autofocus,
        label,
        type="text",
        name,
        values,
        setValues,
    }) => {
    
    const nameRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        if (autofocus) {
            nameRef.current?.focus();
        }
    }, []);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues((prevValues) => ({
            ...prevValues,
            [name]: event.target.value,
        }));
    }

    return (
        <div className="text-field-container">
            <div className="label">
                {label}
            </div>
            <input
                ref={nameRef}
                value={values[name] || ""}
                onChange={handleChange}
                className="input"
                type={type}
            />
        </div>
    )
}

export default TextField;