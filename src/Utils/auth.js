import api from '../Services/api';
import setAuthorizationToken from "./setAuthorizationToken";

export const isAuthenticated = () => {
    if (localStorage.getItem('jwtToken') != null) {
        setAuthorizationToken(localStorage.getItem('jwtToken'));
        return true;
    } else {
        return false;
    }
};

export async function singOut() {
    await api.post("/auth/logout");
    localStorage.removeItem('jwtToken');
}


export const singIn = async (user) => {
    const response = await api.post("/auth/signin", JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } });

    console.log(response.status.toString().match('200').index === 0);
    if (response.status.toString().match('200').index === 0) {
        const token = response.data.accessToken;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        return true;
    } else {
        return false;
    }
};