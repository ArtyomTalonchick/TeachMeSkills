import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const withAuth = (Component) => ({ ...props }) => {

    const account = useSelector(state => state.auth.account);

    if (!!account) {
        return (
            <Component {...props}/>
        )
    } else {
        return (
            <Navigate replace to="/login"/>
        )
    }
}
