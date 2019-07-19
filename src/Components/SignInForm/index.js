import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

import api from '../../Services/api';
import { login } from '../../Services/auth';
import { addAnimationToInput } from '../SignUp/SignUpBox';

import './styles.css';

// import { Form, Container } from "../styles";

class SignInForm extends Component {
    state = {
        userName: "",
        passWord: "",
        error: ""
    };

    handleSignIn = async e => {
        e.preventDefault();
        const { userName, passWord } = this.state;
        if (!userName || !passWord) {
            this.setState({ error: "Preencha os campos para continuar!" });
            addAnimationToInput();
        } else {
            const user = {
                username: userName,
                password: passWord,
            }

            try {
                const response = await api.post("/auth/signin", JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } });
                login(response.data.accessToken);
                this.props.history.push("/");
            } catch (err) {
                addAnimationToInput();
                this.setState({error: "Houve um problema com o login, verifique suas credenciais." });
            }
        }
    };

    render() {
        return (
            <div className="login-container">
                <div className="side-bar-box">
                    <div className="side-content">
                        <div className="side-infomation">
                            <div className="side-title">
                                <h3>Olá usuário,</h3>
                                <h1>seja bem vindo ao iPet!</h1>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="side-btn-box">
                                <Link to="/signup" role="button">Cadastre-se</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="login-form">
                    <div className="header-login-form">
                        <div className="header-login-information">
                            <h1>Login</h1>
                            <p id="error-login">{this.state.error}</p>
                        </div>
                    </div>
                    <form autoComplete="false" className="form-user-login" onSubmit={this.handleSignIn}>
                        <div className="input-area">
                            <label>Nome de usuário: </label>
                            <input type="text" name="username" onChange={e => this.setState({ userName: e.target.value })} className="inputed" autoComplete="false" />
                        </div>
                        <div className="input-area">
                            <label>Senha: </label>
                            <input type="password" name="password" onChange={e => this.setState({ passWord: e.target.value })} className="inputed" autoComplete="false" />
                        </div>
                        <div className="forgot-password">
                            <a href="/forgot-password">Esqueceu a senha?</a>
                        </div>
                        <div className="input-area">
                            <button type="submit">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignInForm);
