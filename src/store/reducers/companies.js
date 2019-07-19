const INITIAL_STATE = {
    data: [],
};

export default function companies(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD_COMPANIES':
            return { ...state, data: [...state.data, ...action.companies] }
        case 'ADD_COMPANY':
            return { ...state, data: [...state.data, action.title] }
        default:
            return state;
    }
};