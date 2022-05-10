import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";


const Username: React.FC = () => {

    const { fetchProfile } = useActions();
    const access = useSelector(state => state.auth.access);
    const username = useSelector(state => state.auth.profile.username);

    useEffect(() => {
        fetchProfile();
    }, [access]);

    return (
        <div className="header-username">
            {username}
        </div>
    )
}

export default Username;