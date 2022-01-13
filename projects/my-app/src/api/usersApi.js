import axios from "axios";

export const getUsers = (token) => axios.get("/api/users", {
    headers: {
        "Authentication": `Basic ${token}`
    }
});
export const getUser = (login) => axios.get(`https://api.github.com/users/${login}`);