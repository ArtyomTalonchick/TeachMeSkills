import React, { useEffect, useState } from "react";

import { Loader } from "../loader/Loader";
import UsersPageCard from "./card/UsersPageCard";
import { getUsers } from "../../api/usersApi";

import "./UsersPage.scss";

export function UsersPage () {
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData () {
            try {
                const response = await getUsers();
                setUsers(response.data);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="users-page">
            {isLoading && <Loader/>}
            {isError &&
                <span className="text">
                    isError...
                </span>
            }
            {!isLoading && !isError &&
                users.map(user => 
                    <UsersPageCard key={user.id} user={user}/>
                )                
            }
        </div>
    )
}