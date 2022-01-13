// import { getUsers } from "../../api/usersApi";
// import { SUCCESS, LOADING, FAILED } from "../../constants/statuses";

export const FETCH_USERS = "users/FETCH_USERS";
export const SET_FETCH_USERS_STATUS = "users/SET_FETCH_USERS_STATUS";
export const SET_USERS = "users/SET_USERS";

export const fetchUsers = () => ({
    type: FETCH_USERS
});

export const setFetchUsersStatus = (status) => ({
    type: SET_FETCH_USERS_STATUS,
    payload: status,
})

export const setUsers = (data) => ({
    type: SET_USERS,
    payload: data,
});

// export const fetchUsers = () => async (dispatch) => {
//     try {
//         dispatch(setFetchUsersStatus(LOADING));
//         const response = await getUsers();

//         dispatch(setUsers(response.data));
//         dispatch(setFetchUsersStatus(SUCCESS));
//     } catch {
//         dispatch(setFetchUsersStatus(FAILED));
//     }
// }
