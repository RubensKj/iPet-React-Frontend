import React, { Component } from 'react';

import SignUpForm from '../../Components/SignUp/SignUpBox';
import { isAuthenticated } from '../../Services/auth';

export default class SignUp extends Component {

  componentDidMount() {
    if(isAuthenticated()) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div>
        <SignUpForm />
      </div>
    );
  }
}
