import { all, spawn } from "redux-saga/effects";
import authSaga from "./auth/authSaga";
import postsSaga from "./posts/postsSaga";


const saga = function* () {
    yield all([
        spawn(postsSaga),
        spawn(authSaga),
    ]);
}

export default saga;
