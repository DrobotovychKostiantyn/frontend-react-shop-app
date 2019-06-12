import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import s from './BurgerNav.module.css';

const navList = [
  { name: 'Home', path: '' },
  { name: 'Man', path: 'man' },
  { name: 'Women', path: 'women' },
  { name: 'About', path: 'about' },
  { name: 'Login', path: 'login' },
  { name: 'Sign Up', path: 'register' },
  { name: 'Sign Out', path: '' },
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
          {navList.map(({ name, path }) => (
            <li key={name} className={s.listItem}>
              <NavLink
                to={`/${path}`}
                className={s.link}
                onClick={handleCloseBurger}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default BurgerNav;
