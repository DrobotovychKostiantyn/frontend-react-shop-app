import React from 'react';

import s from './Login.module.css';

import Form from '../../components/LoginForm/LoginFromContainer';

const Login = () => (
  <div className={s.wrap}>
    <h2 className={s.title}>Login</h2>
    <div className={s.form}>
      <Form />
    </div>
  </div>
);

export default Login;
