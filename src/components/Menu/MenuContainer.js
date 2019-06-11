import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import qs from 'query-string';
import * as Api from '../../services/api';

import View from './MenuView';

const filterMenu = (menu, filter) =>
  menu.filter(dish => dish.name.toLowerCase().includes(filter.toLowerCase()));

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      isLoading: false,
      search: '',
      categories: [],
      error: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    const currentCategory = qs.parse(location.search).category;

    this.setState({ isLoading: true });

    Api.getCategories()
      .then(({ data }) => this.setState({ categories: data }))
      .catch(error => this.setState({ error, isLoading: false }));

    if (!currentCategory) {
      Api.getAllMenuItems().then(menu =>
        this.setState({ menu, isLoading: false }),
      );
      return;
    }

    Api.getMenuItemsWithCategory(currentCategory).then(menu =>
      this.setState({ menu, isLoading: false }),
    );
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const prev = qs.parse(prevProps.location.search).category;
    const next = qs.parse(location.search).category;

    if (prev === next) return;
    Api.getMenuItemsWithCategory(next).then(menu => {
      this.setState({ isLoading: true });
      this.setState({ menu, isLoading: false });
    });

    if (next === undefined) {
      Api.getAllMenuItems().then(menu => {
        this.setState({ isLoading: true });
        this.setState({ menu, isLoading: false });
      });
    }
  }

  handleChangeSelect = ({ target }) => {
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: `category=${target.value}`,
    });
  };

  handleInputChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { menu, isLoading, search, categories, error } = this.state;

    const { location } = this.props;

    const filteredMenu = filterMenu(menu, search);

    return (
      <div>
        {isLoading && <h2>Loading</h2>}
        {error && <h2>error</h2>}

        <View
          menu={filteredMenu}
          openModal={this.openModal}
          handleInputChange={this.handleInputChange}
          inputValue={search}
          selectedOption={qs.parse(location.search).category}
          categories={categories}
          handleChange={this.handleChangeSelect}
        />
      </div>
    );
  }
}

export default withRouter(Menu);
