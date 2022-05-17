import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";


const Username: React.FC = () => {

    const { fetchProfile } = useActions();
    const logged = useSelector(state => state.auth.logged);
    const username = useSelector(state => state.auth.profile.username);

    useEffect(() => {
        // if (logged) {
            fetchProfile();
        // }
    }, []);

    const [name, setName] = useState("");
    
    // useEffect(() => {
    //     setTimeout(() => {
    //         setName("testName")
    //     }, 300);
    // }, []);

    // if (!username) {
    //     return null;
    // }

    return (
        <div data-testid="username" className="header-username">
            {username}
            {name}
        </div>
    )
}

export default Username;