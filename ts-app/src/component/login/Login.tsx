import React, { useState } from "react";
import { getEmailError, getPasswordError } from "../../helpers/validation";
import FormValuesType from "../../types/formValuesType";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";
import useTranslate from "../hooks/useTranslate";
import Button from "../ui/button/Button";
import FormCard from "../ui/formCard/FormCard";
import FormTextField from "../ui/formTextField/FormTextField";


const Login: React.FC = () => {
    const [values, _setValues] = useState<FormValuesType>({});
    const [validationsError, setValidationsError] = useState("");
    const { t } = useTranslate();
    const { createTokens, setAuthError } = useActions();
    const loading = useSelector(state => state.auth.loading);
    const serverError = useSelector(state => state.auth.error);
    const error: string = validationsError || (serverError ? "No active account found with the given credentials" : "");

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const validationError = getEmailError(values.email) || getPasswordError(values.password);
        if (validationError) {
            setValidationsError(validationError);
        } else {
            createTokens(values);
        }
    }

    const setValues = (callback: (prevValue: FormValuesType) => FormValuesType) => {
        _setValues(callback)
        setValidationsError("");
        setAuthError(false);
    }

    return (
        <div className="center__content">
            <FormCard header="Login" loading={loading}>
                <FormTextField
                    autofocus
                    label="Email"
                    type="email"
                    name="email"
                    values={values}
                    setValues={setValues}
                />
                <FormTextField
                    label="Password"
                    type="password"
                    name="password"
                    values={values}
                    setValues={setValues}
                />
                {error &&
                <div className="form-error">
                    {error}
                </div>
                }
                <Button onClick={handleSubmit}>
                    {t("login.submit")}
                </Button>
            </FormCard>
        </div>
    )
}

export default Login;