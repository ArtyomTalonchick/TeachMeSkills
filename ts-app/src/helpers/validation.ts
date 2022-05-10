
export const getEmailError = (value: string): string => {
    return !value.match(/^\w+@\w+\.\w+$/) ? "Email is not valid" : "";
}

export const getPasswordError = (value: string): string => {
    return value.length < 4 ? "Password is not valid" : "";
}