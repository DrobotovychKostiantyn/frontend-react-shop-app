import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import Home from '../pages/HomePage/Home';
import Dishes from '../pages/DishesPage/Dishes';
import Dish from '../pages/DishPage/DishContainer';
import About from '../pages/AboutPage/About';
import Delivery from '../pages/DeliveryPage/Delivery';
import Cart from '../pages/CartPage/Cart';
import SignUp from '../pages/SignUpPage/SignUp';
import Login from '../pages/LoginPage/Login';

import s from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBurgerAndFooter: true,
      // pageState: null,
    };
  }

  handleClickBtnBack = () => {
    // const { pageState } = this.state;
    const { history } = this.props;
    // if (pageState) {
    history.push('/dishes');
    // }
    // this.handleChangeBurgerBtn();
  };

  // getPageState = state => {
  //   this.setState({ pageState: state });
  // };

  handleChangeBurgerBtn = () => {
    this.setState(prev => ({ isBurgerAndFooter: !prev.isBurgerAndFooter }));
  };

  render() {
    const { isBurgerAndFooter } = this.state;
    return (
      <div className={s.wrap}>
        <Header
          isBurgerAndFooter={isBurgerAndFooter}
          handleClickBtnBack={this.handleClickBtnBack}
        />
        <main className={s.main}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/dishes/:id"
              render={props => (
                <Dish
                  {...props}
                  handleChangeBurgerBtn={this.handleChangeBurgerBtn}
                  getPageState={this.getPageState}
                />
              )}
            />
            <Route path="/dishes" render={props => <Dishes {...props} />} />
            <Route path="/about" component={About} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={SignUp} />
            <Redirect to="/" />
          </Switch>
        </main>
        {isBurgerAndFooter && <Footer />}
      </div>
    );
  }
}

export default App;
