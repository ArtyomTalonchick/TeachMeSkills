import axios from "axios";

const login = (login, password) => axios.post("/api/login", { login, password });


export default {
    login,
}