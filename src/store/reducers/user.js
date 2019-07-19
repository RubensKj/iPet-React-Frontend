const INITIAL_STATE = {
    username: '',
    password: '',
    isAuthenticated: 0,
};

export default function userAuth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'AUTHENTICATION':
            return { ...state, isAuthenticated: action.bool }
        case 'INFO-USERNAME':
            return { ...state, username: action.text }
        case 'INFO-PASSWORD':
            return { ...state, password: action.text }
        default:
            return state;
    }
};