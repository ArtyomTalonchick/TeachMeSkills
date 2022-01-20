import React, { useState } from "react";
import { Card, CardContent } from '@mui/material';

import { withTtranslator } from "../../../hoc/withTranslator";
import { UsersPageModal } from "../modal/UsersPageModal";
import { User } from "../../../types/User";

import "./UsersPageCard.scss";


type Props = {
    user: User
}

function UsersPageCard ({ user }: Props) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Card data-testid="user-card" className="users-page-card" onClick={() => setShowModal(true)}>
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