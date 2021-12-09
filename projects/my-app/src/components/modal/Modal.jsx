import React from "react";

import "./Modal.scss";

export class Modal extends React.Component {

    handleClose = (e) => {
        this.props.onClose?.(e);
    }

    render() {
        return (
            <div className="modal">
                <div className="window">
                    <div className="header">
                        <span>
                            {this.props.title}
                        </span>
                        {!!this.props.onClose && <button onClick={this.handleClose}>x</button>}
                        
                    </div>
                    <hr/>
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}