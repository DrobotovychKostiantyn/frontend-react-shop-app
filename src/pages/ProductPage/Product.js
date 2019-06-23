import React, { Component } from 'react';

import s from './Product.module.css';

class Product extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className={s.wrap}>
        <p>productPage</p>
      </div>
    );
  }
}

export default Product;
