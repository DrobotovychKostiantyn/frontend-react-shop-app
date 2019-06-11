import React, { Component } from 'react';

import View from './View';

const INITIAL_STATE = {
  email: '',
  password: '',
};

class LoginFrom extends Component {
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
    const { email, password } = this.state;
    return (
      <>
        <View
          email={email}
          password={password}
          handleChangeInputs={this.handleChangeInputs}
          handleSubmitForm={this.handleSubmitForm}
        />
      </>
    );
  }
}

export default LoginFrom;
