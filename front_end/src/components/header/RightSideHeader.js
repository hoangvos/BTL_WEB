import React, { useEffect, useState } from 'react'
import style from './Header.module.css'
import Cart from './Cart';

export default function RightSideHeader() {
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    const body = document.querySelector('body');
    const bodyWidth = body.clientWidth;
    if (showLogin && bodyWidth <= 760) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
    
  }, [showLogin])
  return (
    <div
      className={`${style.rightSideHeader}`}>
      <form className={style.search}>
        <button className={style.searchButton}>
          <i className="bi bi-search"></i>
        </button>
        <input type="text" placeholder="Bạn cần tìm gì ..." className={style.input} />
      </form>

      
      <div
        className={`${style.user} `}
        onClick={() => {setShowLogin(!showLogin)}}
      >
        <i className="bi bi-person"></i>
      </div>
      {
        showLogin && 
        <div
          className={`${style.login} shadow flex-column text-center`}
        >
          <h4 >ĐĂNG NHẬP TÀI KHOẢN</h4>
          <p >Nhập email và mật khẩu của bạn</p>
          <form className='mt-4'>
            <input type='email' className='col-12 form-control' placeholder='Email' name="email"/>
            <input type='password' className='col-12 form-control mt-3' placeholder='Mật khẩu' name="password"/>
            <button className='btn btn-primary col-12 mt-4'>Đăng nhập</button>
          </form>
          <div className='mt-3'>
            Khách hàng mới?
            <a href='http://localhost:3000/' style={{textDecoration: "none", marginLeft: 5}}>Tạo tài khoản</a>
          </div>
          <div className=''>
            Quên mật khẩu?
            <a href='http://localhost:3000/' style={{textDecoration: "none", marginLeft: 5}}>Khôi phục mật khẩu</a>
          </div>
        </div>
      }
      <Cart />
    </div>
  )
}