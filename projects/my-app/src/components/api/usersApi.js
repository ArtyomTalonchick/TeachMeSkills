import axios from "axios";

export const getUsers = () => axios.get("https://api.github.com/users");
export const getUser = (login) => axios.get(`https://api.github.com/users/${login}`);
