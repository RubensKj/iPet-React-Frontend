import React from 'react';
import { Link, withRouter } from "react-router-dom";

import { useSelector } from 'react-redux';

import SignUpForm from '../SignUpForm';
import SignUpPhaseTwo from '../SignUpPhaseTwo';

import './styles.css';

function SignUpBox() {
    const stateUser = useSelector(state => state.userInfo);
    return (
        <div className="signup-container">
            <div className="side-bar-box">
                <div className="side-content">
                    <div className="side-infomation">
                        <div className="side-title">
                            <h3>Olá usuário,</h3>
                            <h1>seja bem vindo ao iPet!</h1>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="side-btn-box">
                            <Link to="/login" role="button">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="signup-form">
                <div className="header-signup-form">
                    <div className="header-signup-information">
                        <h1>Cadastro</h1>
                        <p id="error-login">{stateUser.error}</p>
                    </div>
                </div>
                {(stateUser.phase === 1 ? (<SignUpForm />) : (null))}
                {(stateUser.phase === 2 ? (<SignUpPhaseTwo />) : (null))}
            </div>
        </div>
    );
}

export function addAnimationToInput() {
    let inputs = document.querySelectorAll('.inputed');
    inputs.forEach(input => {
        if(!input.value) {
            input.style.borderColor = '#fd424f'
            input.classList.add('animation');
        }
    });
}

export default withRouter(SignUpBox);