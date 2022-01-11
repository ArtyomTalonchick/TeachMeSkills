import { createStore } from "redux";
import redcers from "./reducers";

const store = createStore(
    redcers,
    window.__REDUX_DEVTOOLS_EXTENSION__?.(),
);

export default store;