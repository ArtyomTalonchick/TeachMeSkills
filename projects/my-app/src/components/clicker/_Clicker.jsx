import React from "react";
import { connect } from "react-redux";
import { shiftValue } from "../../store/clicker/actions";

import "./Clicker.scss";

class Clicker extends React.Component {
    handleClick = (arg, e) => {
        e.preventDefault();
        this.props.shiftValue(arg);
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
    clickValue: state.clicker.value,
});

const mapDispatchToProps = (dispatch) => ({
    shiftValue: (arg) => dispatch(shiftValue(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clicker);