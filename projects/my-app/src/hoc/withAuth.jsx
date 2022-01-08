import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const withAuth = (Component) => ({ props }) => {
    const isLogged = useSelector(state => !!state.auth.account);

    if (isLogged) {
        return (
            <Component {...props}/>
        )
    } else {
        return (
            <Navigate replace to="/login"/>
        )
    }
}
