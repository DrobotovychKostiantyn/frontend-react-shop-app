import React from 'react';
// import Select from 'react-select';

// const CategoriesSelect = ({ selectedOption, handleChange, categories }) => (
//   <Select value={selectedOption} onChange={handleChange} options={categories} />
// );

const CategoriesSelect = ({ handleChange, categories, selectedOption }) => (
  <select onChange={handleChange} value={selectedOption}>
    {categories.map(category => (
      <option key={category.value} value={category.value}>
        {category.value}
      </option>
    ))}
  </select>
);

export default CategoriesSelect;
