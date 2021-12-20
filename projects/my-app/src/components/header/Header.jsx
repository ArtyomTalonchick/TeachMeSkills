import React from "react";
import { ButtonGroup, Button } from '@mui/material';

import { Time } from "../time/Time";
import { withTtranslator } from "../../hoc/withTranslator";
import { withTheme } from "../../hoc/withTheme";

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
            <a href="/home" className="link">{this.props.translate("header.links.home")}</a>
                <a href="/about" className="link">{this.props.translate("header.links.about")}</a>

                <ButtonGroup size="small" variant="contained" aria-label="outlined primary button group">
                    <Button onClick={() => this.props.setLanguage("ru")}>
                        RU
                    </Button>
                    <Button onClick={() => this.props.setLanguage("en")}>
                        EN
                    </Button>
                </ButtonGroup>

                <ThemeIcon 
                    className="theme-icon"
                    onClick={() => this.props.toggleTheme()}
                />

                <div className="time">
                    {this.state.showTime && <Time/>}
                </div>
            </header>
        )
    }
}

export default withTheme(withTtranslator(Header));