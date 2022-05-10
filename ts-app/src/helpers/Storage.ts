
const get = <T>(key: string, def: T): T => {
    try {
        return JSON.parse(localStorage.getItem(key) || "") as T;
    } catch {
        return def;
    }
}

const set = (key: string, data: any) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch {}
}

const remove = (key: string) => {
    localStorage.removeItem(key);
}

const Storage = {
    get,
    set,
    remove,
}


export default Storage;