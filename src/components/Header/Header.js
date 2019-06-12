import React, { Component, createRef } from 'react';
// import { NavLink } from 'react-router-dom';

import Logo from './Logo/Logo';
import Nav from './Nav/Navigation';
import BurgerNav from './BurgerNav/BurgerNav';
// import BurgerBtn from './BurgerBtn/BurgerBtn';
import Button from '../Button/Button';

import s from './Header.module.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.backdropRef = createRef();

    this.state = {
      isBurgerOpen: false,
    };
  }

  handleOpenBurger = () => {
    this.setState(prev => ({ isBurgerOpen: !prev.isBurgerOpen }));
  };

  handleCloseBurger = () => {
    this.setState({ isBurgerOpen: false });
  };

  render() {
    const { isBurgerOpen } = this.state;
    return (
      <div className={s.wrap} ref={this.backdropRef}>
        <div className={s.mobile}>
          <Button handleClick={this.handleOpenBurger} style={s.burgerBtn}>
            <div
              className={`${s.burgerLine} ${isBurgerOpen && s.burgerLineTop}`}
            />
            <div
              className={`${s.burgerLine} ${isBurgerOpen &&
                s.burgerLineMiddle}`}
            />
            <div
              className={`${s.burgerLine} ${isBurgerOpen &&
                s.burgerLineBottom}`}
            />
          </Button>

          <Logo />

          {isBurgerOpen && (
            <BurgerNav
              link={this.backdropRef}
              isBurgerOpen={isBurgerOpen}
              handleCloseBurger={this.handleCloseBurger}
            />
          )}
        </div>

        <div className={s.tabletDesctop}>
          <div className={s.leftSide}>
            <Logo style={s.logo} />
            <Nav />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
