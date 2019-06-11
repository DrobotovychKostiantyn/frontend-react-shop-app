import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import s from './BurgerNav.module.css';

const navList = [
  { menu: 'Home', path: '' },
  { menu: 'Dishes', path: 'dishes' },
  { menu: 'About', path: 'about' },
  { menu: 'Delivery', path: 'delivery' },
  { menu: 'Login', path: 'login' },
  { menu: 'Sign Up', path: 'register' },
  { menu: 'Sign Out', path: '' },
];

class BurgerNav extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps) {
    const { isBurgerOpen } = this.props;
    return isBurgerOpen !== nextProps.isBurgerOpen;
  }

  componentWillUpdate() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = ({ target }) => {
    const { handleCloseBurger, link, isBurgerOpen } = this.props;
    const isTargetInsideContainer = link.current.contains(target);

    if (isBurgerOpen && !isTargetInsideContainer) {
      handleCloseBurger();
    }
  };

  render() {
    const { handleCloseBurger } = this.props;
    return (
      <nav>
        <ul className={s.list}>
          {navList.map(({ menu, path }) => (
            <li key={menu} className={s.listItem}>
              <NavLink
                to={`/${path}`}
                className={s.link}
                onClick={handleCloseBurger}
              >
                {menu}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default BurgerNav;
