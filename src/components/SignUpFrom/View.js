import React from 'react';

import s from './View.module.css';

const View = ({
  name,
  email,
  password,
  confirmPassword,
  handleChangeInputs,
  handleSubmitForm,
}) => (
  <>
    <form onSubmit={handleSubmitForm} className={s.form}>
      <label htmlFor="name" className={s.name}>
        <p className={s.title}>Name</p>
        <input
          type="name"
          name="name"
          value={name}
          onChange={handleChangeInputs}
          required
          className={s.nameInp}
        />
      </label>

      <label htmlFor="email" className={s.email}>
        <p className={s.title}>Email</p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChangeInputs}
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
          onChange={handleChangeInputs}
          required
          className={s.passInp}
        />
      </label>

      <label htmlFor="confirmPassword" className={`${s.pass} ${s.lastPass}`}>
        <p className={s.title}>Confirm Password</p>
        <input
          type="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChangeInputs}
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

export default View;
