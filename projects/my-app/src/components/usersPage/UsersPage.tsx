import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import Loader from "../loader/Loader";
import UsersPageCard from "./card/UsersPageCard";
import { withAuth } from "../../hoc/withAuth";
import { fetchUsers } from "../../store/users/actions";
import { FAILED, LOADING } from "../../constants/statuses";
import { User } from "../../types/User";

import "./UsersPage.scss";

const UsersPage = () => {
    const dispatch = useDispatch();

    const users = useSelector((state: RootStateOrAny) => state.users.users);
    const fetchUsersStatus = useSelector((state: RootStateOrAny) => state.users.fetchUsersStatus);

    const isLoading = fetchUsersStatus === LOADING;
    const isError = fetchUsersStatus === FAILED;

    useEffect(() => {
        dispatch(fetchUsers());
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
                users.map((user: User) => 
                    <UsersPageCard key={user.id} user={user}/>
                )                
            }
        </div>
    )
}

export default withAuth(UsersPage);