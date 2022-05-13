import axios, { Method } from "axios";
import { call, put } from "redux-saga/effects";
import { authActions } from "../store/auth/authSlice";
import Storage from "./Storage";

type RefreshTokenType = {
    data: {
        access: string
    }
}

const refreshToken = function* () {
    const refresh = Storage.get("refresh", "");
    const response: RefreshTokenType = yield axios.post(`https://studapi.teachmeskills.by/auth/jwt/refresh`, { refresh });
    yield put(authActions.setAccess(response.data.access));
}

const URL = "https://studapi.teachmeskills.by";

const authFetch = (method: Method) => function* (uri: string, data?: any): any {
    const runRequest = function* (): any {
        return yield axios({
            method,
            data,
            url: `${URL}${uri}`,
            headers: {
                "Authorization": `Bearer ${Storage.get("access", "")}`
            },
        });
    }

    try {
        return yield call(runRequest);
    } catch (e: any) {
        if (e.response.status === 401 && Storage.get("refresh", "")) {
            try {
                yield call(refreshToken);
                return yield call(runRequest);
            } catch {
                yield put(authActions.logout());
                throw e;
            }
        } else {
            throw e;
        }
    }
}

const sagaApi = {
    get: authFetch("get"),
    post: authFetch("post"),
}

export default sagaApi;
