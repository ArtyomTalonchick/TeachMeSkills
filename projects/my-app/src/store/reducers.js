import { combineReducers } from "redux";
import { clickerReducer } from "./clicker/reducer";
import { authReducer } from "./auth/reducer";
import { usersReducer } from "./users/reducer";

export default combineReducers({
    clicker: clickerReducer,
    auth: authReducer,
    users: usersReducer,
});