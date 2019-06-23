import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWomenProducts } from '../../modules/operations';
import WomenProducts from '../../components/containers/WomenProductsContainer';

import s from './Women.module.css';

class Women extends Component {
  state = {};

  componentDidMount() {
    const { fetchWomenProductsList } = this.props;
    fetchWomenProductsList();
  }

  render() {
    return (
      <div className={s.wrap}>
        <WomenProducts />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchWomenProductsList: () => dispatch(fetchWomenProducts()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Women);
