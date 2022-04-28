import { PostStateType, PostActionType, PostActionTypes } from "./types";

const initialState: PostStateType = {
    data: undefined,
    loading: false,
    error: false,
}

export const postReducer = (state = initialState, action: PostActionType): PostStateType => {
    switch(action.type) {
        case PostActionTypes.SET_DATA: {
            return {
                ...state,
                data: action.payload,
            }
        }
        case PostActionTypes.SET_LOADING: {
            return {
                ...state,
                loading: action.payload,
            }
        }
        case PostActionTypes.SET_ERROR: {
            return {
                ...state,
                error: action.payload,
            }
        }
        default: return state;
    }
}
