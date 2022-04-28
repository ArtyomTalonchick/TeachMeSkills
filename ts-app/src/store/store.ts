import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

// const store = configureStore({
//     reducer: reducers
// });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;