export const SET_VALUE = "clicker/SET_VALUE";
export const SHIFT_VALUE = "clicker/SHIFT_VALUE";

export const setValue = (value: number) => ({
    type: SET_VALUE,
    payload: value,
});

export const shiftValue = (value: number) => ({
    type: SHIFT_VALUE,
    payload: value,
});
