import React from 'react';

import s from './List.module.css';

const Products = ({ list }) => (
  <ul className={s.wrap}>
    {list.map(product => (
      <li key={product.id} className={s.item}>
        <div className={s.imageWrap}>
          <img src={product.image} alt={product.name} className={s.img} />
        </div>
        <h3 className={s.name}>{product.name}</h3>
        <p className={s.price}>{product.price} $</p>
        <button type="button" className={s.button} onClick={() => null}>
          Buy
        </button>
      </li>
    ))}
  </ul>
);

export default Products;

// {
//     "id": 1,
//     "name": "Man's T-shirt",
//     "description": "Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой.",
//     "image": "https://images.ua.prom.st/370749649_w640_h640_futbolka-muzhskaya-seraya.jpg",
//     "price": 100,
//     "category": "man",
//     "colors": ["white", "blue", "red"]
//   }
