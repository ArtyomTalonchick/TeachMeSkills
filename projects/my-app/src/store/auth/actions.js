import authApi from "../../api/authApi";
import { SUCCESS, LOADING, FAILED } from "../../constants/statuses";

export const SET_ACCOUNT = "auth/SET_ACCOUNT";
export const LOGOUT = "auth/LOGOUT";
export const SET_LOGIN_STATUS = "auth/SET_LOGIN_STATUS";

export const setAccount = (data) => ({
    type: SET_ACCOUNT,
    payload: data,
});

export const logout = () => ({
    type: LOGOUT,
});

export const setLoginStatus = (status) => ({
    type: SET_LOGIN_STATUS,
    payload: status,
})

export const login = (login, password) => async (dispatch) => {
    dispatch(setLoginStatus(LOADING));

    try {
        const response = await authApi.login(login, password);

        dispatch(setAccount(response.data.user));
        dispatch(setLoginStatus(SUCCESS));
    } catch {
        dispatch(setLoginStatus(FAILED));
    }
}