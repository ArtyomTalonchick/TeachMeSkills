import axios, { Method } from 'axios';
const URL = "https://studapi.teachmeskills.by/";

const fetch = (method: Method) => async (uri: string, data?: any) =>
    await axios({
        method,
        url: `${URL}${uri}`,
        data,
    });

const api = {
    get: fetch("GET"),
    post: fetch("POST"),
}

export default api;