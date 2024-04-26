import React from 'react'
import style from './Cart.module.css';

export default function CartProduct({ product }) {
  return (
    <div className={style.product}>
      <div>{product.image}</div>
      <div>{product.size}</div>
      <div>{product.color}</div>
      <div>{product.title}</div>
      <div>{product.price}</div>
      <div>{product.count}</div>
    </div>
  )
}
