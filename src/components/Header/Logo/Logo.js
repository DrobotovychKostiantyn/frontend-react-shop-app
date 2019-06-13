import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../../../assets/logo.png';

import s from './Logo.module.css';

const Logo = ({ style = '' }) => (
  <div className={style}>
    <NavLink to="/" className={s.link}>
      {/* <img src={logo} alt="logo" className={s.logo} /> */}
      shop
    </NavLink>
  </div>
);

export default Logo;
