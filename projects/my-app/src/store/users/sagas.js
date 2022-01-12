import { all, call, put, spawn, take, takeEvery, takeLeading, fork, select } from "redux-saga/effects";
import { getUsers } from "../../api/usersApi";
import { FETCH_USERS, setFetchUsersStatus, setUsers } from "./actions";
import { FAILED, LOADING, SUCCESS } from "../../constants/actionStatuses";

function* fetchUsersWatcher() {
    yield takeLeading(FETCH_USERS, fetchUsersWorker);
    
    // yield take(FETCH_USERS);
    // yield fork(fetchUsersWorker);
    // yield fork(fetchUsersWorker);
}

function* fetchUsersWorker(action) {
    try {
        yield put(setFetchUsersStatus(LOADING));
        const response = yield call(getUsers);
        yield put(setUsers(response.data));
    } catch (e) {
        yield put(setFetchUsersStatus(FAILED));
    } finally {
        yield put(setFetchUsersStatus(SUCCESS));
    }
}

export const usersSaga = function* () {
    yield all([
        spawn(fetchUsersWatcher),
    ]);
};