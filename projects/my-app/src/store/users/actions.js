export const FETCH_USERS = "users/FETCH_USERS";
export const SET_FETCH_USERS_STATUS = "users/SET_FETCH_USERS_STATUS";
export const SET_USERS = "users/SET_USERS";

export const fetchUsers = (data) => ({
    type: FETCH_USERS,
    payload: data,
});

export const setFetchUsersStatus = (status) => ({
    type: SET_FETCH_USERS_STATUS,
    payload: status,
})

export const setUsers = (data) => ({
    type: SET_USERS,
    payload: data,
});
