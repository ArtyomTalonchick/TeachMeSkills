import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../api/usersApi';

const UserPage = (props) => {

    const [user, setUser] = useState({});

    const params = useParams();

    useEffect(() => {
        getUser(params.login)
            .then((response) => setUser(response.data));
    }, []);

    useEffect(() => {
        console.log(user);
    });

    return (
        <div>
            User Page
        </div>
    )
}



export default UserPage;