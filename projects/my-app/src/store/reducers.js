import { combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import { clickerReducer } from "./clicker/reducer";
import { usersReducer } from "./users/reducer";

export default combineReducers({
    clicker: clickerReducer,
    auth: authReducer,
    users: usersReducer,
});