import React, { useState } from "react";
import { UsersPageModal } from "../modal/UsersPageModal";

import "./UsersPageCard.scss";

export function UsersPageCard ({ user }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="users-page-card" onClick={() => setShowModal(true)}>
                <img className="avatar" src={user.avatar_url} alt="Avatar"/>
                <span className="name">
                    {user.login}
                </span>
            </div>

            {showModal && <UsersPageModal user={user} onClose={() => setShowModal(false)}/>}
        </>
    );
}