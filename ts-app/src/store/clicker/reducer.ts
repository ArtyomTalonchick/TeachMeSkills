import { ClickerStateType } from "./types";
import { ClickerActionType, ClickerActionTypes } from "./types";

const initialState: ClickerStateType = {
    value: 0,
}

export const clickerReducer = (state = initialState, action: ClickerActionType): ClickerStateType => {
    switch(action.type) {
        case ClickerActionTypes.SET_VALUE: {
            return {
                ...state,
                value: action.payload,
            }
        }
        case ClickerActionTypes.SHIFT_VALUE: {
            const value = state.value + action.payload;
            return {
                ...state,
                value,
            }
        }
        default: return state;
    }
}
