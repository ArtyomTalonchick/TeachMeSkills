import React from "react";
import { Select as MuiTextField, SelectChangeEvent } from '@mui/material';

import "./Select.scss";

type PropsType = {
    label: string
    value?: string
    setValue: (value: string) => void
}

const Select: React.FC<PropsType> = ({
        children,
        label,
        value,
        setValue
    }) => {
    

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    }

    return (
        <div className="select-container">
            <div className="label">
                {label}
            </div>
            <MuiTextField
                fullWidth
                value={value}
                onChange={handleChange}
            >
                {children}
            </MuiTextField>
        </div>
    )
}

export default Select;

