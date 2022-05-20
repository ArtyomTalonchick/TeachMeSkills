import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import saga from "./saga";

export const getStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    
    const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => [
            ...getDefaultMiddleware(),
            sagaMiddleware,
        ],
    });
    
    sagaMiddleware.run(saga);

    return store;
}

const store = getStore();

export default store;