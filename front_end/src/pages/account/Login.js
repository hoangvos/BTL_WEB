import React from 'react'
import style from './Account.module.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <Link
          to='/account/login'
          style={{textDecoration: 'none'}}
        >
          <h1
            className={style.titleLogin}
            style={{
              color: 'black'
            }}
          >ĐĂNG NHẬP</h1>
        </Link>
        <Link
          to='/account/register'
          style={{textDecoration: 'none'}}
        >
          <h1
            className={style.titleRegister}
            style={{
              color: '#cccccc'
          }}
          >ĐĂNG KÝ</h1>
        </Link>
      </div>
      <form className={style.form}>
        <div className={style.email}>
          <label>Email</label>
          <input type='email' placeholder='Vui lòng nhập email của bạn' name='email'/>
        </div>
        <div className={style.password}>
          <label>Mật khẩu</label>
          <input type='password' placeholder='Vui lòng nhập mật khẩu của bạn' name='password'/>
        </div>
        <div>
          <button>
            ĐĂNG NHẬP
          </button>
          <div className={style.control}>
            <div>
              Bạn chưa có tài khoản? <Link to='/account/register'>Đăng ký ngay</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
