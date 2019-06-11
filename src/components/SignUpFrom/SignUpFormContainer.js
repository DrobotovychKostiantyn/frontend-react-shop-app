import React, { Component } from 'react';

import View from './View';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
  }

  handleChangeInputs = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, email, password, confirmPassword } = this.state;
    return (
      <View
        name={name}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        handleChangeInputs={this.handleChangeInputs}
        handleSubmitForm={this.handleSubmitForm}
      />
    );
  }
}

export default SignUpForm;
