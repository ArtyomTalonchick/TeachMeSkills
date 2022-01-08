import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, CardHeader, TextField, Button } from "@mui/material";

import Loader from "../loader/Loader";
import { LOADING, FAILED } from "../../constants/actionStatuses";

import "./LoginPage.scss";
import { login as loginAction } from "../../store/auth/actions";

const LoginPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [changed, setChanged] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogged = useSelector(state => !!state.auth.account);
    const loginStatus = useSelector(state => state.auth.loginStatus);

    const error = loginStatus === FAILED && !changed;
    const loading = loginStatus === LOADING;

    useEffect(() => {
        if (isLogged) {
            navigate("/");
        }
    }, [navigate, isLogged]);


    const handleInput = (setFunction) => (e) => {
        setChanged(true);
        setFunction(e.currentTarget.value);
    }    

    const handleSubmit = () => {
        setChanged(false);
        dispatch(loginAction(login, password));
    }
    

    return (
        <div className="login-page">
            <Card className="users-page-card">
                <CardHeader title={"Login"}/>
                <CardContent>
                    
                    
                    <TextField
                        value={login}
                        onChange={handleInput(setLogin)}
                        error={!!error}
                        disabled={loading}

                        className="text-field"
                        fullWidth
                        label="Login"
                        placeholder="Input name"
                        variant="outlined"
                    />
                    <TextField
                        value={password}
                        onChange={handleInput(setPassword)}
                        error={!!error}
                        disabled={loading}

                        className="text-field"
                        fullWidth
                        type="password"
                        placeholder="Input password"
                        label="Password"
                        variant="outlined"
                    />
                    
                    <Button 
                        onClick={handleSubmit}
                        endIcon={loading ? <Loader /> : undefined}
                        disabled={loading || !!error}
                        >
                        Login
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default LoginPage;