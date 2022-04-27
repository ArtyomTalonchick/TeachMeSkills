export type ClickerStateType = {
    value: number
}

export enum ClickerActionTypes {
    SET_VALUE = "SET_VALUE",
    SHIFT_VALUE = "SHIFT_VALUE",
}

type setValueAction = {
    type: ClickerActionTypes.SET_VALUE,
    payload: number,
}

type shiftValueAction = {
    type: ClickerActionTypes.SHIFT_VALUE,
    payload: number,
}

export type ClickerActionType = 
    setValueAction
    | shiftValueAction;