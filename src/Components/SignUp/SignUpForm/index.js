import React from 'react';

import api from '../../../Services/api';
import { useSelector, useDispatch } from 'react-redux';
import { addErrors, addInput, changePhase } from '../../../store/actions/userRegisterInformation';
import { loginWithBack } from '../../../Services/auth';
import { addAnimationToInput } from '../SignUpBox';

import './styles.css';


export default function SignUpForm() {
    const stateUser = useSelector(state => state.userInfo);
    const dispatch = useDispatch();

    async function handleSignUp(e) {
        e.preventDefault();
        const { userName, passWord, Email } = stateUser.userInfo;
        if (!userName || !passWord || !Email) {
            dispatch(addErrors("Preencha todos os dados para se cadastrar"));
            addAnimationToInput();
        } else {
            const user = {
                username: userName,
                password: passWord,
                email: Email,
            };
            try {
                await api.post("/auth/signup", JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } });
                loginWithBack(user.username, user.password);
                dispatch(addErrors(''));
                dispatch(changePhase(2));
            } catch (err) {
                console.log(err);
                dispatch(addErrors("Nome de usuário ou email já está em uso."));
                addAnimationToInput();
            }
        }
    };

    return (
        <form className="form-user-signup" onSubmit={handleSignUp}>
            <div className="input-area">
                <label>Nome de usuário: </label>
                <input type="text" name="username" onChange={e => dispatch(addInput('ADD_USERNAME', e.target.value))} className="inputed" />
            </div>
            <div className="input-area">
                <label>Senha: </label>
                <input type="password" name="password" onChange={e => dispatch(addInput('ADD_PASSWORD', e.target.value))} className="inputed" autoComplete="true" />
            </div>
            <div className="input-area">
                <label>Email: </label>
                <input type="text" name="email" onChange={e => dispatch(addInput('ADD_EMAIL', e.target.value))} className="inputed" />
            </div>
            <div className="input-area">
                <button type="submit">Cadastre-se</button>
            </div>
        </form>
    );
}
