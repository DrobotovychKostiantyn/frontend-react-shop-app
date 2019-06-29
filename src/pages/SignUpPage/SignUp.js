import React from 'react';

import Form from '../../components/SignUpFrom/View';

import s from './SignUp.module.css';

const SignUp = () => (
  <div className={s.wrap}>
    <h2 className={s.title}>Sign Up</h2>
    <Form />
  </div>
);

export default SignUp;
