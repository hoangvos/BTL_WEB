import React from 'react'
import style from './Header.module.css'

export default function RightSideHeader() {
  return (
    <div
      className={`${style.rightSideHeader}`}>
      <form className={style.search}>
        <button className={style.searchButton}>
          <i class="bi bi-search"></i>
        </button>
        <input type="text" placeholder="Bạn cần tìm gì ..." className={style.input} />
      </form>

      <div className={`${style.user}`}>
        <i class="bi bi-person"></i>
      </div>
      <div className={`${style.favorite}`}>
        <i class="bi bi-suit-heart"></i>
        <i class="bi bi-circle-fill"></i>
        <div className={`${style.number_favorite}`}>9</div>
      </div>
      <div className={`${style.bag}`}>
        <i class="bi bi-bag-dash"></i>
        <i class="bi bi-circle-fill"></i>
        <div className={`${style.number_bag}`}>0</div>
      </div>
    </div>
  )
}
