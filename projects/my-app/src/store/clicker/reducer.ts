import cloneDeep from "lodash.clonedeep";
import { 
    SET_VALUE,
    SHIFT_VALUE,
} from "./actions";

const defaultState = {
    value: 0,
};

export const clickerReducer = (state = defaultState, action: any) => {

    switch (action?.type)
    {
        case SET_VALUE: {
            const clone = cloneDeep(state);
            clone.value = action.payload;
            return clone;
        }
        case SHIFT_VALUE: {
            const clone = cloneDeep(state);
            clone.value += action.payload;
            return clone;
        }
        default: return state;
    }
};

