// import { setValue, shiftValue } from './actionCreators';
import { ClickerStateType, ClickerActionType, ClickerActionTypes } from "./types";
import { createReducer } from '@reduxjs/toolkit';


const initialState: ClickerStateType = {
    value: 0,
}

export const clickerReducer = createReducer(initialState, {
    [ClickerActionTypes.SET_VALUE]: (state, action: ClickerActionType) => {
        state.value = action.payload;
    },
    [ClickerActionTypes.SHIFT_VALUE]: (state, action: ClickerActionType) => {
        state.value = state.value + action.payload;
    },
});