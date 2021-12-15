import React from "react";
import { withTtranslator } from "../../hoc/withTranslator";
import { Time } from "../time/Time";
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

                <div className="languages">
                    <button onClick={() => this.props.setLanguage("ru")}>
                        RU
                    </button>
                    <button onClick={() => this.props.setLanguage("en")}>
                        EN
                    </button>
                </div>
    
                <div className="time">
                    {this.state.showTime && <Time/>}
                </div>
            </header>
        )
    }
}

export default withTtranslator(Header);