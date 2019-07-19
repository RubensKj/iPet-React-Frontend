export function setAuthentication(bool) {
    return { type: 'AUTHENTICATION', bool }
}

export function setUsername(username) {
    return { type: 'INFO-USERNAME', username }
}

export function setPassword(password) {
    return { type: 'INFO-PASSWORD', password }
}

export function handleChange(type, text) {
    return { type: type, text }
}