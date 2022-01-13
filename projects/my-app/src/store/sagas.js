import { all, spawn } from "redux-saga/effects";
import { usersSaga } from "./users/sagas";

const sagas = function* () {
    yield all([
        spawn(usersSaga),
    ]);
}

export default sagas;