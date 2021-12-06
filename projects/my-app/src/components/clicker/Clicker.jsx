import React from "react";

import "./Clicker.scss";

export class Clicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    handleClick = (arg, e) => {
        e.preventDefault();
        this.setState(prevState => ({ count: prevState.count + arg }));
    }

    render() {
        return (
            <div className="clicker">
                <span className="clicker__label">{this.state.count}</span>
                <div>
                    <button onClick={(e) => this.handleClick(+1, e)}>+</button>
                    <button onClick={(e) => this.handleClick(-1, e)}>-</button>
                </div>
            </div>
        )
    }
}