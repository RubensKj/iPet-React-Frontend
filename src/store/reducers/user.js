const INITIAL_STATE = {
    data: {
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        cpf: "",
        address: [
            {
                placeNumber: 0,
                street: '',
                complement: '',
                neighborhood: '',
                city: '',
                cep: '',
            }
        ],
        ddd: "",
        phoneNumber: "",
    },
};

export default function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USER_INFORMATION':
            return { ...state, data: action.user }
        default:
            return state;
    }
};