import React, { useEffect, useRef, useState } from 'react'
import style from './ManageProduct.module.css'
import axios from 'axios';
import Header from '../component/Header';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachSanPhamAction } from '../../../redux/actions/ManageProductAction';
import { Link } from 'react-router-dom';
export default function ManageProduct() {
  const { arrProduct } = useSelector(state => state.QuanLySanPhamReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = layDanhSachSanPhamAction();
    dispatch(action); 
  }, [dispatch])

  const handleClickDelete = (product) => {
    axios
      .delete(`http://localhost/BE/?c=product&a=delete&id=${product.id}`)
      .then((result) => {
        if (result.data === 'thanh cong') {
          if (window.confirm(`Xóa ${product.ptitle} thành công. \nNhấn đồng ý để reload lại trang`)) {
            window.location.reload();
          }
        }else {
          alert(result.data);
        }
      });
  }
  const handleClickUpdate = (product) => {
    
  }

  return (
    <div className={style.container}>
      <Header route={'manageProduct'}/>
      <div className={style.middle}>
        <div className={style.title}>
          <h1>Quản lý sản phẩm</h1>
        </div>
        <div className={style.productContainer}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Ảnh</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Giá</th>
                <th scope="col">Gender</th>
                <th scope="col">Type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {arrProduct && arrProduct.map((product, index) => {
                return <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td><img src={product.pimg} alt={product.ptitle} style={{width: '100px'}}/></td>
                  <td>{product.ptitle}</td>
                  <td>{product.pprice}</td>
                  <td>{product.pgender}</td>
                  <td>{product.pkind}</td>
                  <td>
                  <Link
                    to={`/updateProduct/${product.id}`}
                  >
                    <button className="btn btn-primary">
                      Edit
                    </button>
                  </Link>
                    
                    <button className="btn btn-danger" onClick={() => {handleClickDelete(product)}}>Delete</button>
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
