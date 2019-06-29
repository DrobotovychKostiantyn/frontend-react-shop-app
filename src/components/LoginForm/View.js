import React, { useState } from 'react';

import s from './View.module.css';

const View = () => {
  const [email, setEmail] = useState('');

  const handleEmail = ({ target: { value } }) => setEmail(value);

  const [password, setPassword] = useState('');

  const handlePassword = ({ target: { value } }) => setPassword(value);

  const handleSubmitForm = e => {
    e.preventDefault();

    console.log({ email, password });

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmitForm} className={s.form}>
        <label htmlFor="email" className={s.email}>
          <p className={s.title}>Email</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            required
            className={s.emailInp}
          />
        </label>

        <label htmlFor="password" className={s.pass}>
          <p className={s.title}>Password</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            required
            className={s.passInp}
          />
        </label>

        <button type="submit" className={s.btn}>
          Login
        </button>
      </form>
    </>
  );
};

export default View;
