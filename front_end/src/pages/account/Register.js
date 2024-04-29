import React from 'react'
import style from './Account.module.css'
import { Link } from 'react-router-dom'

export default function Register() {
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
              color: '#cccccc'
          }}
          >ĐĂNG NHẬP</h1>
        </Link>
        <Link
          to='/account/registor'
          style={{textDecoration: 'none'}}
        >
          <h1
            className={style.titleRegister}
            style={{
              color: 'black'
            }}
          >ĐĂNG KÝ</h1>
        </Link>
        </div>
        <form className={style.form}>
          <div className={style.email}>
            <label>Họ</label>
            <input type='text' placeholder='Họ' name='ho'/>
          </div>
          <div className={style.email}>
            <label>Tên</label>
            <input type='text' placeholder='Tên' name='ten'/>
          </div>
          <div className={style.sexInput}>
            <div>
              <input type="radio" id="html" name="sex" value="boy"/>
              <label for="html">Nữ</label>
            </div>
            <div>
              <input type="radio" id="css" name="sex" value="girl"/>
              <label for="css">Nam</label>              
            </div>
          </div>
          <div className={style.email}>
            <label>Ngày sinh</label>
            <input type='text' placeholder='mm/dd/yy' name='birthDay'/>
          </div>
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
              ĐĂNG KÝ
            </button>
            <div className={style.control}>
              <div>
                Bạn đã có tài khoản ? <Link to='/account/login'>Đăng nhập ngay</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
  )
}
