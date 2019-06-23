import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchManProducts } from '../../modules/operations';

import ManProducts from '../../components/containers/ManProductsContainer';

import s from './Man.module.css';

class Man extends Component {
  state = {};

  componentDidMount() {
    const { fetchManProductsList } = this.props;

    fetchManProductsList();
  }

  render() {
    return (
      <div className={s.wrap}>
        <ManProducts />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchManProductsList: () => dispatch(fetchManProducts()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Man);
