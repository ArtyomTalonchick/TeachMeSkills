import { PayloadAction } from "@reduxjs/toolkit";
import { all, put, takeEvery, spawn, call, takeLeading } from "redux-saga/effects";
import sagaApi from "../../helpers/sagaApi";
import Storage from "../../helpers/Storage";
import FormValuesType from "../../types/formValuesType";
import ProfileType from "../../types/profileType";
import { authActions } from "./authSlice";

type FetchProfileType = {
    data: ProfileType,
}

const fetchProfileWatcher = function* () {
    yield takeEvery(authActions.fetchProfile.type, fetchProfileWorker);
};

const fetchProfileWorker = function* () {
    try {
        const response: FetchProfileType = yield call(sagaApi.get, `/auth/users/me/`);
        yield put(authActions.setProfile(response.data));
    } catch {
        console.warn("fetchProfileWorker error");

    }
};

type CreateTokensType = {
    data: {
        access: string,
        refresh: string,
    },
}

const createTokensWatcher = function* () {
    yield takeLeading(authActions.createTokens.type, createTokensWorker);
};

const createTokensWorker = function* ({ payload }: PayloadAction<FormValuesType>) {
    yield put(authActions.setAuthLoading(true));
    yield put(authActions.setAuthError(false));

    try {
        const { data }: CreateTokensType = yield call(sagaApi.post, `/auth/jwt/create/`, payload);
        yield put(authActions.setAccess(data.access));
        yield put(authActions.setRefresh(data.refresh));
    } catch {
        yield put(authActions.setAuthError(true));
    } finally {
        yield put(authActions.setAuthLoading(false));
    }
};

const startUpSaga = function* () {
    const storageTheme = Storage.get<string | undefined>("theme", undefined);
    if (storageTheme) {
        document.body.dataset.theme = storageTheme;
        yield put(authActions.setTheme(storageTheme));
    }
}


const authSaga = function* () {
    yield all([
        spawn(fetchProfileWatcher),
        spawn(createTokensWatcher),
        spawn(startUpSaga),        
    ]);
}

export default authSaga;