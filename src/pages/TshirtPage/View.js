import React from 'react';

import Select from 'react-select';

import s from './View.module.css';

const optionsQuantity = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
];

const View = ({
  dish,
  handleClickBtn,
  handleChangeQuantitySelect,
  quantity,
}) => (
  <div>
    <div className={s.imgWrap}>
      <img src={dish.image} alt={dish.name} className={s.img} />
    </div>
    <h2 className={s.name}>{dish.name}</h2>

    <p className={s.price}>${dish.price}</p>

    <form className={s.form}>
      <label className={s.quantity}>
        <p className={s.quantityTitle}>Quantity:</p>
        <Select
          defaultValue={optionsQuantity[1]}
          options={optionsQuantity}
          onChange={handleChangeQuantitySelect}
          value={quantity}
          className={s.select}
        />
      </label>
    </form>

    <div className={s.descr}>
      <h2 className={s.descrTitle}>Description</h2>

      <p className={s.descrText}>
        A versatile full-zip that you can wear all day long and even to the gym.
        This technical shell features moisture-wicking fabric, added stretch and
        a hidden pocket for your smartphone or media player.
      </p>
    </div>

    <button type="button" onClick={handleClickBtn} className={s.btn}>
      Add to cart
    </button>
  </div>
);

export default View;
