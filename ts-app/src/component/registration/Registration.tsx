import React, { useState } from "react";
import FormValuesType from "../../types/formValuesType";
import Button from "../ui/button/Button";
import FormCard from "../ui/formCard/FormCard";
import TextField from "../ui/textField/TextField";

const Registration: React.FC = () => {
    const [values, setValues] = useState<FormValuesType>({});

    const handleSubmit = () => {
        console.log(values);
    }

    return (
        <FormCard header="Registration">
            <TextField
                autofocus
                label="Email"
                type="email"
                name="email"
                values={values}
                setValues={setValues}
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                values={values}
                setValues={setValues}
            />
            <Button onClick={handleSubmit}>
                Registration
            </Button>
        </FormCard>
    )
}

export default Registration;