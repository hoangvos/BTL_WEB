import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'
export default function Header({route}) {
  return (
    <div className={style.leftSide}>
      <h4>Quản lý sản phẩm</h4>
      <ul>
        <li className={route === 'createProduct' && style.isActive}>
          <Link to='/createProduct'>
            Thêm sản phẩm
          </Link>
        </li>
        <li className={route === 'updateProduct' && style.isActive}>
          <Link to='/updateProduct'>
            Cập nhật sản phẩm
          </Link>
        </li>
        <li className={route === 'manageProduct' && style.isActive}>
          <Link to='/manageProduct'>
            Quản lý sản phẩm
          </Link>
        </li>
        
      </ul>
    </div>
  )
}
