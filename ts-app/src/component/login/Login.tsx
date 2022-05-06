import React, { useState } from "react";
import FormValuesType from "../../types/formValuesType";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";
import useTranslate from "../hooks/useTranslate";
import Button from "../ui/button/Button";
import FormCard from "../ui/formCard/FormCard";
import FormTextField from "../ui/formTextField/FormTextField";


const Login: React.FC = () => {
    const [values, setValues] = useState<FormValuesType>({});
    const { t } = useTranslate();
    const { createTokens } = useActions();
    const loading = useSelector(state => state.auth.loading);
    const error = useSelector(state => state.auth.error);

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        createTokens(values);
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
                    No active account found with the given credentials
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