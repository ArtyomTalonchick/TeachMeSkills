import { createAction } from '@reduxjs/toolkit';
import { ClickerActionTypes } from './types';

export const setValue = createAction<number>(ClickerActionTypes.SET_VALUE);
export const shiftValue = createAction<number>(ClickerActionTypes.SHIFT_VALUE);
