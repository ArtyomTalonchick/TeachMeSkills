import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";


const Username: React.FC = () => {

    const { fetchProfile } = useActions();
    const logged = useSelector(state => state.auth.logged);
    const username = useSelector(state => state.auth.profile.username);

    useEffect(() => {
        if (logged) {
            fetchProfile();
        }
    }, [logged]);

    return (
        <div className="header-username">
            {username}
        </div>
    )
}

export default Username;