import { combineReducers } from "redux";
import { clickerReducer } from "./clicker/reducer";
import { postReducer } from "./post/reducer";

export default combineReducers({
    clicker: clickerReducer,
    post: postReducer,
});