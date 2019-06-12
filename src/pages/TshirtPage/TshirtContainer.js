import React, { Component } from 'react';
import * as Api from '../../services/api';

import s from './TshirtContainer.module.css';

import View from './View';

class Tshirt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: {},
      selectedQuantityOption: { value: 1, label: '1' },
      selectedSizeOption: { value: 'm', label: 'M' },
    };
  }

  componentDidMount() {
    const {
      match: { params },
      // location: { state },
    } = this.props;

    // getPageState(state);

    Api.getDishById(params.id).then(({ data }) =>
      this.setState({ dish: data }),
    );
  }

  handleBtnBack = () => {
    const {
      history,
      location: { state },
    } = this.props;

    if (state) {
      history.push(state.from);
      return;
    }

    history.push('/man');
  };

  handleChangeQuantitySelect = selectedQuantityOption =>
    this.setState({ selectedQuantityOption });

  handleChangeSizeSelect = selectedSizeOption =>
    this.setState({ selectedSizeOption });

  render() {
    const { dish, selectedQuantityOption, selectedSizeOption } = this.state;

    return (
      <div className={s.wrap}>
        <View
          dish={dish}
          handleAddToCart={() => null}
          handleChangeQuantitySelect={this.handleChangeQuantitySelect}
          handleChangeSizeSelect={this.handleChangeSizeSelect}
          quantity={selectedQuantityOption}
          size={selectedSizeOption}
        />
      </div>
    );
  }
}

export default Tshirt;
