import React, { useEffect, useRef, useState } from 'react'
import style from './ManageUser.module.css'
import axios from 'axios';
import Header from '../component/Header';
import { Link, useNavigate } from 'react-router-dom';
export default function ManageUser() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('role') !== 'admin' || !localStorage.getItem('role')) {
      navigate('/account/login');
    }
    else {
      axios
        .get(`http://localhost/BE/?c=user&a=list`)
        .then((result) => {
          setUsers(result.data);
        })
    }
  }, [])

  const handleClickDelete = (user) => {
    // axios
    //   .delete(`http://localhost/BE/?c=product&a=delete&id=${product.id}`)
    //   .then((result) => {
    //     if (result.data === 'thanh cong') {
    //       if (window.confirm(`Xóa ${product.ptitle} thành công. \nNhấn đồng ý để reload lại trang`)) {
    //         window.location.reload();
    //       }
    //     }else {
    //       alert(result.data);
    //     }
    //   });
  }


  return (
    <div className={style.container}>
      <Header route={'manageUser'}/>
      <div className={style.middle}>
        <div className={style.title}>
          <h1>Quản lý sản phẩm</h1>
        </div>
        <div className={style.productContainer}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th scope="col">Full name</th>
                <th scope="col">Phone number</th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((user, index) => {
                return <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.fullname}</td>
                  <td>{user.phonenumber}</td>
                  <td>
                    <select
                      class="form-select"
                      onChange={(e) => { console.log(e.target.value) }}
                      disabled={user.id === '1'}
                    >
                      <option value="user" selected={user.role === 'user'}>user</option>
                      <option value="admin" selected={user.role === 'admin'}>admin</option>
                    </select>
                  </td>
                  <td className='d-flex justify-content-center gap-4'>
                    <button className="btn btn-danger" onClick={() => { handleClickDelete(user) }}>Delete</button>
                    <button className="btn btn-success ml-2" onClick={() => {handleClickDelete(user)}}>Update</button>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

