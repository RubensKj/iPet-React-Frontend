const INITIAL_STATE = {
    userInfo: {
        userName: "",
        passWord: "",
        Email: "",
        FirstName: "",
        LastName: "",
        CPF: "",
        Address: [],
        DDD: "",
        PhoneNumber: "",
    },
    phase: 1,
    error: '',
};

export default function userInfo(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_USERNAME':
            return { ...state, userInfo: { ...state.userInfo, userName: action.value } }
        case 'ADD_PASSWORD':
            return { ...state, userInfo: { ...state.userInfo, passWord: action.value } }
        case 'ADD_EMAIL':
            return { ...state, userInfo: { ...state.userInfo, Email: action.value } }
        case 'ADD_FIRST_NAME':
            return { ...state, userInfo: { ...state.userInfo, FirstName: action.value } }
        case 'ADD_LAST_NAME':
            return { ...state, userInfo: { ...state.userInfo, LastName: action.value } }
        case 'ADD_CPF':
            return { ...state, userInfo: { ...state.userInfo, CPF: action.value } }
        case 'ADD_PHASE':
            return { ...state, phase: action.number }
        case 'ADD_ERRORS':
            return { ...state, error: action.message }
        default:
            return state;
    }
};