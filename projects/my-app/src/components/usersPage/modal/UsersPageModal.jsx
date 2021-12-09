import React from "react";
import { Modal } from "../../modal/Modal"

import "./UsersPageModal.scss";

export class UsersPageModal extends React.Component {
    render() {
        const user = this.props.user;

        return (
            <Modal title={`${user.login} (${user.type})`}
                    onClose={this.props.onClose}>

                <div className="users-page-modal">
                    <img className="avatar" src={user.avatar_url} alt="Avatar"/>
                    <a href={user.html_url} target="_blank">User profile</a>
                </div>
            </Modal>
        )
    }
}