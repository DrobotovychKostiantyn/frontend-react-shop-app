import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import s from './MenuView.module.css';

import CategoriesSelector from '../CategoriesSelect/CategoriesSelect';

const MenuView = ({
  menu,
  handleInputChange,
  inputValue,
  location,
  match,
  selectedOption,
  categories,
  handleChange,
}) => (
  <>
    <input
      type="text"
      onChange={handleInputChange}
      value={inputValue}
      name="search"
      placeholder="search"
    />

    <CategoriesSelector
      selectedOption={selectedOption}
      categories={categories}
      handleChange={handleChange}
    />

    <ul className={s.menu}>
      {menu.map(dish => (
        <li key={dish.id} className={s.dish}>
          <NavLink
            to={{
              pathname: `${match.url}/${dish.id}`,
              state: { from: location },
            }}
          >
            <img src={dish.image} alt={dish.name} />
            <h2>Name: {dish.name}</h2>

            <p>Price: {dish.price}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  </>
);

export default withRouter(MenuView);
