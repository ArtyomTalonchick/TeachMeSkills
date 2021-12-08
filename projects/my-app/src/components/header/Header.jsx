import React from "react";
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
        this.timeoutId = setTimeout(() => {
            this.setState({showTime: false});
        }, 10000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutId);
    }

    render() {
        return (
            <header>
                <a href="/home" className="header__link">Home</a>
                <a href="/about" className="header__link">About</a>
    
                <div className="header__time">
                    {this.state.showTime && <Time/>}
                </div>
            </header>
        )
    }
}

export default Header;