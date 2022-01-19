type User = {
    "login": string,
    "id": number,
    "avatar_url": string,
    "site_admin": boolean,
    "location": string,
    [prop: string]: any,
}

export const User;