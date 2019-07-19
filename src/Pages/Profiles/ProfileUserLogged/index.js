import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../../Services/api';
import { setUserInformation } from '../../../store/actions/user';

import Header from '../../../Components/Header';

import './styles.css';

export default function ProfileUserLogged() {
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch();

  async function getUserInfoFromUserLogged() {
    await api.get('/profile').then(res => (dispatch(setUserInformation(res.data))));
  }

  useEffect(() => {
    getUserInfoFromUserLogged();
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="box-area">
        <div className="side-bar-box">
          <div className="side-box-profile">
            <div className="avatar-area">
              <img srcSet={user.avatar} alt="user-logo" />
            </div>
            <div className="transition">
              <h3>Informações</h3>
              <div className="border" />
            </div>
            <div className="user-info-box">
              <div className="user-information">
                <div className="info-area">
                  <span>Apelido:</span>
                  <p>{user.username}</p>
                </div>
                <div className="info-area">
                  <span>Telefone:</span>
                  <p>{'(' + user.ddd + ') ' + user.phoneNumber}</p>
                </div>
                <div className="info-area">
                  <span>CPF:</span>
                  <p>{user.cpf}</p>
                </div>
              </div>
            </div>
            <div className="transition">
              <h3>Endereços</h3>
              <div className="border" />
            </div>
            <div className="address-box">
              {(user.address.map(address => (
                <div className="address-info" key={address.id}>
                  <p className="number-and-street">{address.placeNumber}, {address.street}{', ' + address.complement}</p>
                  <p className="additional-info">{address.neighborhood}, {address.city} - {address.cep}</p>
                </div>
              )))}
              <a href="#" className="address-plus">
                <div>
                  <p>+</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-box">
          <div className="head-profile">
            <div className="head-area">
              <h1>{user.firstName + ' ' + user.lastName}</h1>
            </div>
            <div className="head-area">
              <p>{user.email}</p>
            </div>
          </div>
          <div className="actions">
            <a href="#" className="action selected">Pedidos</a>
            <a href="#" className="action">Favoritos</a>
            <a href="#" className="action">Configurações</a>
          </div>
          <div className="transition-profile">
            <div className="border" />
          </div>
          <div className="component-area">

          </div>
        </div>
      </div>
    </>
  );
}
