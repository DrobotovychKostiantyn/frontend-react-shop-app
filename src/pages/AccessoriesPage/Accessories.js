import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccessoriesProducts } from '../../modules/operations';

import Products from '../../components/containers/AccessoriesProductsContainer';

import s from './Accessories.module.css';

class Accessories extends Component {
  state = {};

  componentDidMount() {
    const { fetchAccessories } = this.props;
    fetchAccessories();
  }

  render() {
    return (
      <div className={s.wrap}>
        <Products />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAccessories: () => dispatch(fetchAccessoriesProducts()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Accessories);
