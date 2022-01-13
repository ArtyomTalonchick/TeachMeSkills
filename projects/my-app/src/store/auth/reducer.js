import cloneDeep from "lodash.clonedeep";
import { 
    SET_ACCOUNT,
    LOGOUT,
    SET_LOGIN_STATUS,
} from "./actions";

const defaultState = {
    account: JSON.parse(localStorage.getItem("me")),
    loginStatus: null,
};

export const authReducer = (state = defaultState, action) => {

    switch (action?.type)
    {
        case SET_ACCOUNT: {
            const clone = cloneDeep(state);
            clone.account = action.payload;
            localStorage.setItem("me", JSON.stringify(action.payload));
            return clone;
        }
        case LOGOUT: {
            const clone = cloneDeep(state);
            clone.account = null;
            localStorage.setItem("me", JSON.stringify(null));
            return clone;
        }
        case SET_LOGIN_STATUS: {
            const clone = cloneDeep(state);
            clone.loginStatus = action.payload;
            return clone;
        }
        default: return state;
    }
};