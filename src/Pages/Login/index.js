import React, { Component } from 'react';
import api from '../../Services/api';
import setAuthorizationToken from '../../Utils/setAuthorizationToken';

import './styles.css';

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        redirect: false,
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSubmit = async e => {
        e.preventDefault();

        const user = {};

        user.username = this.state.username;
        user.password = this.state.password;

        let response = await api.post("/auth/signin", JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } });

        if (response.status.toString().match('200')) {
            const token = response.data.accessToken;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            return this.props.history.push("/");
        }

        document.getElementById('error-login').textContent = "Usuário ou senha estão incorretos.";
    };

    render() {
        return (
            <div className="login-container">
                <form className="form-user-login" onSubmit={this.handleSubmit}>
                    <div className="header-form">
                        <h3>Olá usuário,</h3>
                        <h1>seja bem vindo ao iPet</h1>
                    </div>
                    <p id="error-login"></p>
                    <div className="input-area">
                        <label>Nome de usuário: </label>
                        <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                    </div>
                    <div className="input-area">
                        <label>Senha: </label>
                        <input type="password" name="password" onChange={this.handleChange} value={this.state.password} autoComplete="true" />
                    </div>
                    <div className="input-area">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
};