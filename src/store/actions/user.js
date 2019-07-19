export function setUserInformation(user) {
    return { type: 'SET_USER_INFORMATION', user }
}

export function handleChange(type, text) {
    return { type: type, text }
}