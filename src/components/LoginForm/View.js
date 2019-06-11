import React from 'react';

import s from './View.module.css';

const View = ({ email, password, handleChangeInputs, handleSubmitForm }) => (
  <>
    <form onSubmit={handleSubmitForm} className={s.form}>
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

      <button type="submit" className={s.btn}>
        Login
      </button>
    </form>
  </>
);

export default View;
