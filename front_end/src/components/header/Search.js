import React from 'react'
import style from './Header.module.css'

export default function Search() {
  return (
    <form className={style.search}>
      <button className={style.searchButton}>
        <i className="bi bi-search"></i>
      </button>
      <input type="text" placeholder="Bạn cần tìm gì ..." className={style.input} />
    </form>
  )
}
