import React from "react";
import { connect } from "react-redux";
import { setValue, shiftValue } from "../../store/clicker/actions";

import "./Clicker.scss";

class Clicker extends React.Component {
    handleClick = (arg, e) => {
        e.preventDefault();
        this.props.shiftValue(arg);
        // this.setState(prevState => ({ count: prevState.count + arg }));

    }

    render() {
        return (
            <div className="clicker">
                <span className="clicker__label">{this.props.clickValue}</span>
                <div>
                    <button onClick={(e) => this.handleClick(+1, e)}>+</button>
                    <button onClick={(e) => this.handleClick(-1, e)}>-</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    clickValue: state.clicker.value
})

const mapDispatchToProps = (dispatch) => ({
    setValue: () => dispatch(setValue()),
    shiftValue: (v) => dispatch(shiftValue(v)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Clicker);