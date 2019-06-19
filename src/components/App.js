import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import Home from '../pages/HomePage/Home';
import About from '../pages/AboutPage/About';
import Delivery from '../pages/DeliveryPage/Delivery';
import Cart from '../pages/CartPage/Cart';
import SignUp from '../pages/SignUpPage/SignUp';
import Login from '../pages/LoginPage/Login';
import Man from '../pages/ManPage/Man';
import Women from '../pages/WomenPage/Women';

import s from './App.module.css';

class App extends Component {
  handleClickBtnBack = () => null;

  render() {
    return (
      <div className={s.wrap}>
        <Header handleClickBtnBack={this.handleClickBtnBack} />
        <main className={s.main}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/women" render={props => <Women {...props} />} />
            <Route path="/man" render={props => <Man {...props} />} />
            <Route path="/about" component={About} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={SignUp} />
            <Redirect to="/" />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
