import React from 'react'
import style from './Order.module.css'
export default function Order() {
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
        <h4>Đơn hàng của bạn</h4>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Mã đơn hàng</th>
              <th scope="col">Ngày đặt</th>
              <th scope="col">Tổng tiền</th>
              <th scope="col">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

