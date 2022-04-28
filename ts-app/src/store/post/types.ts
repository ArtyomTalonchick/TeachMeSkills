import PostType from "../../types/postType";

export type PostStateType = {
    data?: PostType,
    loading: boolean,
    error: boolean,
}

export enum PostActionTypes {
    SET_DATA = "SET_DATA",
    SET_LOADING = "SET_LOADING",
    SET_ERROR = "SET_ERROR",
}

type setDataAction = {
    type: PostActionTypes.SET_DATA,
    payload?: PostType,
}

type setLoadingAction = {
    type: PostActionTypes.SET_LOADING,
    payload: boolean,
}

type setErrorAction = {
    type: PostActionTypes.SET_ERROR,
    payload: boolean,
}

export type PostActionType = 
    setDataAction
    | setLoadingAction
    | setErrorAction;