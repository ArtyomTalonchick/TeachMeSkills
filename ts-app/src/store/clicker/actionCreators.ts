import { ClickerActionType, ClickerActionTypes } from './types';

export const setValue = (value: number): ClickerActionType => ({
    type: ClickerActionTypes.SET_VALUE,
    payload: value,
});

export const shiftValue = (value: number): ClickerActionType => ({
    type: ClickerActionTypes.SHIFT_VALUE,
    payload: value,
});