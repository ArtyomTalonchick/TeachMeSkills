import React, { useState } from "react";
import TextField from "../ui/textField/TextField";

import "./Registration.scss";

const Registration: React.FC = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = () => {
        console.log({ email, password });
    }

    return (
        <div className="registration-container">
            <TextField
                label="Email"
                type="email"
                value={email}
                setValue={setEmail}
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                setValue={setPassword}
            />
            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}

export default Registration;