import React from 'react'
import style from './UserInfor.module.css'
import { useNavigate } from 'react-router-dom';
export default function UserInfor() {
  const navigate = useNavigate();
  if (localStorage.getItem('role') !== 'user' && localStorage.getItem('role') !== 'admin') {
    navigate('/account/userInfor');
  }
  const handleClickLogout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('fullname');
    localStorage.removeItem('email');
    localStorage.removeItem('phonenumber');
    navigate('/');
  }

  return (
    <div className={style.container}>
      <div className={style.leftSide}>
        <i className="bi bi-person-circle"></i>
        <div>Xin Chào <span>{localStorage.getItem('fullname')}</span></div>
        <ul>
          <li><i className="bi bi-person-circle"></i>Thông tin tài khoản</li>
          <li><i className="bi bi-kanban"></i>Quản lý đơn hàng</li>
          <li
            onClick={() =>{handleClickLogout()}}
          ><i className="bi bi-box-arrow-right"></i>Đăng xuất</li>
        </ul>
      </div>
      <div className={style.rightSide}>
        <h4>Thông tin tài khoản</h4>
        <div className={style.userContent}>
          <ul>
            <li>Họ và tên</li>
            <li>Tài khoản</li>
            <li>Email</li>
            <li>Điện thoại</li>
          </ul>
          <ul>
            <li>{localStorage.getItem('fullname')}</li>
            <li>{localStorage.getItem('username')}</li>
            <li>{localStorage.getItem('email')}</li>
            <li>{localStorage.getItem('phonenumber')}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
