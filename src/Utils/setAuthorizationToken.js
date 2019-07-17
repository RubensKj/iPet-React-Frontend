// import axios from 'axios';
import api from '../Services/api';

export default function setAuthorizationToken(token) {
    if(token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};