import React from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Button } from '@mui/material';

import { Time } from "../time/Time";
import { withTtranslator } from "../../hoc/withTranslator";
import { withTheme } from "../../hoc/withTheme";
import { withMe } from "../../hoc/withMe";

import { ReactComponent as ThemeIcon } from "../../icons/theme.svg";
import "./Header.scss";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showTime: true,
        }
    }

    componentDidMount() {
        console.log(this.props);
        // this.timeoutId = setTimeout(() => {
        //     this.setState({showTime: false});
        // }, 5000);
    }

    componentWillUnmount() {
        // clearTimeout(this.timeoutId);
    }

    render() {
        return (
            <header className="header">

                {this.props.me && 
                    <span className="header-item">
                        User: {this.props.me.login}
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

                {this.props.me
                ?
                    <Button className="header-item" onClick={() => this.props.setMe(null)}>
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
                    {this.state.showTime && <Time/>}
                </div>
            </header>
        )
    }
}

export default withMe(withTheme(withTtranslator(Header)));