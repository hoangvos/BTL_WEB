import React from 'react'
import style from './UserInfor.module.css'
export default function UserInfor() {
  const userName = 'Nguyễn Văn A';
  return (
    <div className={style.container}>
      <div className={style.leftSide}>
        <i className="bi bi-person-circle"></i>
        <div>Xin Chào <span>{userName}</span></div>
        <ul>
          <li><i className="bi bi-person-circle"></i>Thông tin tài khoản</li>
          <li><i className="bi bi-kanban"></i>Quản lý đơn hàng</li>
          <li><i className="bi bi-box-arrow-right"></i>Đăng xuất</li>
        </ul>
      </div>
      <div className={style.rightSide}>
        <h4>Thông tin tài khoản</h4>
        <div className={style.userContent}>
          <ul>
            <li>Họ và tên</li>
            <li>Email</li>
            <li>Địa chỉ</li>
            <li>Ngày sinh</li>
            <li>Điện thoại</li>
          </ul>
          <ul>
            <li>Họ và tên</li>
            <li>Email</li>
            <li>Địa chỉ</li>
            <li>Ngày sinh</li>
            <li>Điện thoại</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
