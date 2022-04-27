import { combineReducers } from "redux";
import { clickerReducer } from "./clicker/reducer";

export default combineReducers({
    clicker: clickerReducer,
});