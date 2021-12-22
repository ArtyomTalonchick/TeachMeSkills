import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, TextField, Button } from "@mui/material";

import Loader from "../loader/Loader";
import authApi from "../../api/authApi";

import "./LoginPage.scss";
import { withMe } from "../../hoc/withMe";

const LoginPage = ({ me, setMe }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        if (me) {
            navigate("/")
        }
    }, [me]);


    const handleInput = (setFunction) => (e) => {
        setError(false);
        setFunction(e.currentTarget.value);
    }    

    const handleSubmit = () => {
        setLoading(true);
        authApi.login(login, password)
            .then((response) => {
                setMe(response.data.user);
            })
            .catch((error) => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }
    

    return (
        <div className="login-page">
            <Card className="users-page-card">
                <CardHeader title={"Login"}/>
                <CardContent>
                    
                    
                    {/* {error && <span>{error}</span>} */}
                    <TextField
                        value={login}
                        onChange={handleInput(setLogin)}
                        error={!!error}

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

                        className="text-field"
                        fullWidth
                        type="password"
                        placeholder="Input password"
                        label="Password"
                        variant="outlined"
                    />
                    
                    <Button 
                        onClick={handleSubmit}
                        endIcon={ loading ? <Loader /> : undefined}
                        disabled={loading || !!error}
                        >
                        Login
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default withMe(LoginPage);