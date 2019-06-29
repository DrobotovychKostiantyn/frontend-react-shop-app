import React, { useState } from 'react';

import s from './View.module.css';

const View = () => {
  const [name, setName] = useState('');
  const handleChangeName = ({ target: { value } }) => setName(value);

  const [email, setEmail] = useState('');
  const handleChangeEmail = ({ target: { value } }) => setEmail(value);

  const [password, setPassword] = useState('');
  const handleChangePassword = ({ target: { value } }) => setPassword(value);

  const [confirmPassword, setConfirmPassword] = useState('');
  const handleChangeConfirmPassword = ({ target: { value } }) =>
    setConfirmPassword(value);

  const handleSubmitForm = e => {
    e.preventDefault();

    console.log({ name, email, password, confirmPassword });

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmitForm} className={s.form}>
        <label htmlFor="name" className={s.name}>
          <p className={s.title}>Name</p>
          <input
            type="name"
            name="Name"
            value={name}
            onChange={handleChangeName}
            required
            className={s.nameInp}
          />
        </label>

        <label htmlFor="email" className={s.email}>
          <p className={s.title}>Email</p>
          <input
            type="email"
            name="Email"
            value={email}
            onChange={handleChangeEmail}
            required
            className={s.emailInp}
          />
        </label>

        <label htmlFor="password" className={s.pass}>
          <p className={s.title}>Password</p>
          <input
            type="password"
            name="Password"
            value={password}
            onChange={handleChangePassword}
            required
            className={s.passInp}
          />
        </label>

        <label htmlFor="confirmPassword" className={`${s.pass} ${s.lastPass}`}>
          <p className={s.title}>Confirm Password</p>
          <input
            type="confirmPassword"
            name="ConfirmPassword"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            required
            className={s.passInp}
          />
        </label>

        <button type="submit" className={s.btn}>
          Sign Up
        </button>
      </form>
    </>
  );
};

export default View;
