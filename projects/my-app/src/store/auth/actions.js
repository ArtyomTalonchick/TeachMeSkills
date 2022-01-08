import authApi from "../../api/authApi";
import { FAILED, LOADING, SUCCESS } from "../../constants/actionStatuses";

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
        // await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await authApi.login(login, password);
        dispatch(setAccount(response.data.user));
        dispatch(setLoginStatus(SUCCESS));
    } catch {
        dispatch(setLoginStatus(FAILED));
    }
}