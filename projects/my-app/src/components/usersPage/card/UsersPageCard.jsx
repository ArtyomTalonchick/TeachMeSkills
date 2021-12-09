import React from "react";
import { Modal } from "../../modal/Modal"
import { UsersPageModal } from "../modal/UsersPageModal";

import "./UsersPageCard.scss";

export class UsersPageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
        }
    }

    handleClick = (e) => {
        this.setState({ showModal: true });
    }

    handleCloseModal = (e) => {
        this.setState({ showModal: false });
    }

    render() {
        const user = this.props.user;

        return (
            <>
                <div className="users-page-card" onClick={this.handleClick}>
                    <img className="avatar" src={user.avatar_url} alt="Avatar"/>
                    <span className="name">
                        {user.login}
                    </span>
                </div>

                {this.state.showModal &&  <UsersPageModal user={user} onClose={this.handleCloseModal}/>}
            </>
        )
    }
}