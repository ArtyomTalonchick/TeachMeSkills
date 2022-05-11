import axios, { Method } from 'axios';
import { authActions } from '../store/auth/authSlice';
import Storage from './Storage';

const URL = "https://studapi.teachmeskills.by/";

const refreshToken = async (dispatch?: any) => {
    const refresh = Storage.get("refresh", "");
    const response = await axios.post(`${URL}auth/jwt/refresh`, { refresh });
    dispatch(authActions.setAccess(response.data.access));
}

const fetch = (method: Method) => async (uri: string, data?: any, auth: boolean = false, dispatch?: any) => {

    const runRequest = async () => {
        const headers = !auth ? undefined : { "Authorization": `Bearer ${Storage.get("access", "")}` };
        const response = await axios({
            method,
            url: `${URL}${uri}`,
            data,
            headers,
        });
        return response;
    }

    try {
        return await runRequest();
    } catch (e: any) {
        if (e.response.status === 401) {
            try {
                await refreshToken(dispatch);
                return await runRequest();
            } catch {
                dispatch(authActions.logout());
                throw e;
            }
        } else {
            throw e;
        }
    }
};

const api = {
    get: fetch("GET"),
    post: fetch("POST"),
}

export default api;