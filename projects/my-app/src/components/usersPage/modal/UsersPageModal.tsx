import React, { useEffect, useState } from "react";
import { getUser } from "../../../api/usersApi";
import { Modal } from "../../modal/Modal"
import { User } from "../../../types/User";

import "./UsersPageModal.scss";

type Props = {
    user: User,
    onClose: () => void,
}

export function UsersPageModal ({ user, onClose }: Props) {
    const [data, setData] = useState<User | null>();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        async function fetchData() {
            try {
                const response = await getUser(user.login);
                setData(response.data);
                setIsLoading(false);
            } catch {
                setIsLoading(false);
                setIsError(true);
            }
        };

        fetchData();
    }, []);


    return (
        <Modal title={`${user.login} (${user.type})`}
                onClose={onClose}>

            <div className="users-page-modal">
                <img className="avatar" src={user.avatar_url} alt="Avatar"/>
                <a href={user.html_url} target="_blank">User profile</a>

                {isLoading && <span>Loading...</span>}
                {isError && <span>Error...</span>}
                {!isLoading && !isError &&
                    <div className="info">
                        <p>
                            Name: {data?.name}
                        </p>
                        {data?.location &&
                            <p>
                                Location: {data?.location}
                            </p>
                        }
                    </div>
                }
            </div>

        </Modal>
    )
}