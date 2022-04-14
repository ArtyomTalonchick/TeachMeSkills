import React, { useState } from "react";
import FormValuesType from "../../types/formValuesType";
import useTranslate from "../hooks/useTranslate";
import Button from "../ui/button/Button";
import FormCard from "../ui/formCard/FormCard";
import TextField from "../ui/textField/TextField";


const Login: React.FC = () => {
    const [values, setValues] = useState<FormValuesType>({});
    const { t } = useTranslate();

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        console.log(values);
    }

    return (
        <FormCard header="Login">
            <TextField
                autofocus
                label={t("login.name")}
                name="name"
                values={values}
                setValues={setValues}
            />
            <TextField
                label={t("login.email")}
                type="email"
                name="email"
                values={values}
                setValues={setValues}
            />
            <TextField
                label={t("login.password")}
                type="password"
                name="password"
                values={values}
                setValues={setValues}
            />
            <TextField
                label={t("login.confirmPassword")}
                type="password"
                name="confirmPassword"
                values={values}
                setValues={setValues}
            />
            <Button onClick={handleSubmit}>
                {t("login.submit")}
            </Button>
        </FormCard>
    )
}

export default Login;