import { all, call, put, takeEvery, take, fork, takeLeading, spawn, select } from "redux-saga/effects";
import { getUsers } from "../../api/usersApi";
import { FETCH_USERS, setFetchUsersStatus, setUsers } from "./actions";
import { FAILED, LOADING, SUCCESS } from "../../constants/statuses";

function* fetchUsersWatcher() {
    yield takeEvery(FETCH_USERS, fetchUsersWorker);
}

function* fetchUsersWorker(action) {
    try {
        yield put(setFetchUsersStatus(LOADING));

        const token = yield select(state => state.auth.account?.token);
        const response = yield call(getUsers, token);

        yield put(setUsers(response.data));
        yield put(setFetchUsersStatus(SUCCESS));
    } catch (e) {
        yield put(setFetchUsersStatus(FAILED));
    }
}

export const usersSaga = function* () {
    yield all([
        call(fetchUsersWatcher),
    ]);
};

