import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

const navList = [
  { menu: 'Home', path: '' },
  { menu: 'Dishes', path: 'dishes' },
  { menu: 'About', path: 'about' },
  { menu: 'Delivery', path: 'delivery' },
];

const Nav = () => (
  <nav>
    <ul className={s.list}>
      {navList.map(({ menu, path }) => (
        <li key={menu}>
          <NavLink to={`/${path}`}>{menu}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
