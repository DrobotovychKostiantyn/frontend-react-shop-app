import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

const navList = [
  { name: 'Home', path: '' },
  { name: 'Man', path: 'man' },
  { name: 'Women', path: 'women' },
  { name: 'About', path: 'about' },
];

const Nav = () => (
  <nav>
    <ul className={s.list}>
      {navList.map(({ name, path }) => (
        <li key={name}>
          <NavLink to={`/${path}`}>{name}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
