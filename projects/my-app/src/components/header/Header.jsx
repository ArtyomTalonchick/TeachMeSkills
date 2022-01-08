import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ButtonGroup, Button } from '@mui/material';

import { Time } from "../time/Time";
import { withTtranslator } from "../../hoc/withTranslator";
import { withTheme } from "../../hoc/withTheme";
import { logout } from "../../store/auth/actions";

import { ReactComponent as ThemeIcon } from "../../icons/theme.svg";
import "./Header.scss";

const Header = () => {
    const dispatch = useDispatch();
    const showTime = useState(true);
    const account = useSelector(state => state.auth.account);
    
    return (
        <header className="header">

            {account && 
                <span className="header-item">
                    User: {account.login}
                </span>
            }

            <ButtonGroup size="small" variant="contained" aria-label="outlined primary button group" className="header-item">
                <Button onClick={() => this.props.setLanguage("ru")}>
                    RU
                </Button>
                <Button onClick={() => this.props.setLanguage("en")}>
                    EN
                </Button>
            </ButtonGroup>

            {account
            ?
                <Button className="header-item" onClick={() => dispatch(logout())}>
                    Logout
                </Button>
            :
                <Link className="header-item" to="/login">
                    Login
                </Link>
            }


            <ThemeIcon 
                className="theme-icon header-item"
                onClick={() => this.props.toggleTheme()}
            />

            <div className="time header-item">
                {showTime && <Time/>}
            </div>
        </header>
    )
}

export default withTheme(withTtranslator(Header));