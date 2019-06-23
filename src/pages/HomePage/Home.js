import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductSuccess } from '../../modules/operations';

import Products from '../../components/containers/ProductsContainer';

import s from './Home.module.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    return (
      <div className={s.wrap}>
        <Products />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProductSuccess()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Home);
