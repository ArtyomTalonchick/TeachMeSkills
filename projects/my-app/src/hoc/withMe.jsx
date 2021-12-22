import AuthContext from "../components/contexts/AuthContext";

export const withMe = (Component) => (props) => (
    <AuthContext.Consumer>
        {value => <Component me={value.me} setMe={value.setMe} {...props}/> }
    </AuthContext.Consumer>
)
