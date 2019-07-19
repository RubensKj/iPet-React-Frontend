import React from 'react';

import api from '../../../Services/api';
import { useSelector, useDispatch } from 'react-redux';
import { addErrors, addInput } from '../../../store/actions/userRegisterInformation';
import { addAnimationToInput } from '../SignUpBox';

import './styles.css';

export default function SignUpPhaseTwo() {
  const stateUser = useSelector(state => state.userInfo);
  const dispatch = useDispatch();

  async function handleAddSomeInfoToUser(e) {
    e.preventDefault();
    const { userName, passWord, Email, FirstName, LastName, CPF } = stateUser.userInfo;
    if (!FirstName || !LastName || !CPF) {
      dispatch(addErrors("Preencha todos os dados para se cadastrar"));
      addAnimationToInput();
    } else {
      const user = {
        username: userName,
        password: passWord,
        email: Email,
        firstName: FirstName,
        lastName: LastName,
        cpf: CPF,
      };
      try {
        await api.post("/finishSignUp", JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } }).then(res => (console.log(res.data)));
        window.location.href = '/';
      } catch (err) {
        console.log(err);
        dispatch(addErrors("Erro ao continuar o cadastro."));
      }
    }
  };

  return (
    <form className="form-user-signup" onSubmit={handleAddSomeInfoToUser}>
      <div className="input-area">
        <label>Primeiro nome: </label>
        <input type="text" name="firstName" onChange={e => dispatch(addInput('ADD_FIRST_NAME', e.target.value))} className="inputed" />
      </div>
      <div className="input-area">
        <label>Último nome: </label>
        <input type="text" name="lastName" onChange={e => dispatch(addInput('ADD_LAST_NAME', e.target.value))} className="inputed" />
      </div>
      <div className="input-area">
        <label>CPF: </label>
        <input type="text" name="cpf" onChange={e => dispatch(addInput('ADD_CPF', e.target.value))} className="inputed" />
      </div>
      <div className="input-area">
        <button type="submit">Finalizar</button>
      </div>
    </form>
  );
}
