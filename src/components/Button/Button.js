import React from 'react';

const BurgerBtn = ({ children, handleClick, style }) => (
  <>
    <button type="button" onClick={handleClick} className={style}>
      {children}
    </button>
  </>
);

export default BurgerBtn;
