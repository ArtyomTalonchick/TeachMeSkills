import React, { useContext, useState } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import FormValuesType from "../../types/formValuesType";
import Button from "../ui/button/Button";
import FormCard from "../ui/formCard/FormCard";
import TextField from "../ui/textField/TextField";


const Login: React.FC = () => {
    const [values, setValues] = useState<FormValuesType>({});
    const { lang } = useContext(LanguageContext);
    console.log(lang);

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        console.log(values);
    }

    return (
        <FormCard>
            <TextField
                autofocus={true}
                label={lang === "en" ? "Name" : "Имя"}
                name="name"
                values={values}
                setValues={setValues}
            />
            <TextField
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
            <TextField
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                values={values}
                setValues={setValues}
            />
            <Button onClick={handleSubmit}>
                Login
            </Button>
        </FormCard>
    )
}

export default Login;