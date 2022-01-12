import cloneDeep from "lodash.clonedeep";
import { 
    SET_USERS,
    SET_FETCH_USERS_STATUS,
} from "./actions";

const defaultState = {
    users: [],
    fetchUsersStatus: null,
};

export const usersReducer = (state = defaultState, action) => {

    switch (action?.type)
    {
        case SET_USERS: {
            const clone = cloneDeep(state);
            clone.users = action.payload;
            return clone;
        }
        case SET_FETCH_USERS_STATUS: {
            const clone = cloneDeep(state);
            clone.fetchUsersStatus = action.payload;
            return clone;
        }
        default: return state;
    }
};