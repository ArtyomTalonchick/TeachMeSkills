import React, { useState } from "react";
import { Card, CardContent } from '@mui/material';

import { withTtranslator } from "../../../hoc/withTranslator";
import { UsersPageModal } from "../modal/UsersPageModal";

import "./UsersPageCard.scss";

function UsersPageCard ({ user }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Card className="users-page-card" onClick={() => setShowModal(true)}>
                <CardContent>
                    <img className="avatar" src={user.avatar_url} alt="Avatar"/>
                    <span className="name text">
                        {user.login}
                    </span>
                </CardContent>
            </Card>

            {showModal && <UsersPageModal user={user} onClose={() => setShowModal(false)}/>}
        </>
    );
}

export default withTtranslator(UsersPageCard);