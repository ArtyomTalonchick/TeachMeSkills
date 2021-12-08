import React from "react";

export class Time extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            now: this.getTime(),
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ now: this.getTime() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    getTime = () => new Date().toTimeString().substring(0, 8);

    render() {
        return (
            <>
                <span>{this.state.now}</span>
            </>
        )
    }
}