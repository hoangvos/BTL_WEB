import React, { useEffect, useRef, useState } from 'react'
import style from './ManageOrder.module.css'
import axios from 'axios';
import Header from '../component/Header';
import { Link, useNavigate } from 'react-router-dom';
export default function ManageOrder() {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useState([]);
  const fetchProduct = async (productID) => {
    const res = await axios
      .get(`http://localhost/BE/?c=product&a=list&search=${productID}`)
    return res.data[0];
  };
  let formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });
  
  useEffect(() => {  
    // fetch cart product
    axios
    .get(`http://localhost/BE/?c=cart&a=list`)
    .then((result) => {
      const cartProductPromises = result.data.map((cartProduct) => {
        return fetchProduct(cartProduct.p_id)
          .then((data) => {
            cartProduct['pprice'] = data.pprice;
            cartProduct['ptitle'] = data.ptitle;
            return cartProduct;
          });
      });

      Promise.all(cartProductPromises)
        .then((cartProductsWithData) => {
          setCartProducts(cartProductsWithData);
        });
    });

  }, [])

  // const handleClickDelete = (user) => {
  //   console.log(user.username);
  //   if (user.id === '1') {
  //     alert('Không thể xóa user này');
  //     return;
  //   }
  //   if (window.confirm(`Bạn có chắc chắn muốn xóa ${user.username}`) === false) return;
    
  //   axios
  //     .delete(`http://localhost/BE/?c=user&a=delete&id=${user.username}`)
  //     .then((result) => {
  //       if (result.data === 'thanh cong') {
  //         if (window.confirm(`Xóa ${user.username} thành công. \nNhấn đồng ý để reload lại trang`)) {
  //           window.location.reload();
  //         }
  //       }else {
  //         alert(result.data);
  //       }
  //     });
  // }

  // const handleUpdateRole = (e, index) => {
  //   const sendData = {
  //     username: users[index].username,
  //     role: e.target.value
  //   };
  //   console.log(sendData);
  //   if (window.confirm(`Bạn có chắc chắn muốn cập nhật role của ${users[index].username} thành ${e.target.value}`)) {
  //     //call api update role
      
  //     axios.post("http://localhost/BE/?c=user&a=updateRole", sendData)
  //       .then((result) => {
  //         if (result.data) {
  //           if(window.confirm(`Cập nhật role của ${users[index].username} thành ${sendData.role} thành công. \nNhấn đồng ý để reload lại trang`)){
  //             window.location.reload();
  //           }
  //         }
  //         else {    
  //           alert("Cập nhật role thất bại");
  //         }
  //     });
  //   } 
  // }
  const handleChangeStatus = (e, index) => {
    const cartProduct = cartProducts[index];
    const sendData = {
      id: cartProduct.id,
      sl: cartProduct.sl,
      a_id: cartProduct.a_id,
      p_id: cartProduct.p_id,
      size: cartProduct.size,
      status: e.target.value
    }
    axios.post("http://localhost/BE/?c=cart&a=update", sendData).then((result) => {
        console.log(result)
        if (result.data === 'false') {
          alert("Cập nhật giỏ hàng thất bại");
        }
        else {
          if (window.confirm('Cập nhật đơn hàng thành công.\n Nhấn đồng ý để reload lại trang')) {
            window.location.reload();
          }
        }
    });
  }
  return (
    <div className={style.container}>
      <Header route={'manageOrder'}/>
      <div className={style.middle}>
        <div className={style.title}>
          <h1>Quản lý đơn hàng</h1>
        </div>
        <div className={style.productContainer}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Mã đơn</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Size</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Tổng tiền</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Xóa</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((cartProduct, index) => {
                return (
                  <tr>
                    <th scope="row">{cartProduct.id}</th>
                    <td>{cartProduct.ptitle}</td>
                    <td>{cartProduct.size}</td>
                    <td>{cartProduct.sl}</td>
                    <td>{formatter.format(cartProduct.sl * cartProduct.pprice)}</td>
                    <td>
                      <select
                        className="form-select"
                        onChange={(e) => { handleChangeStatus(e, index)}}
                        value={cartProduct.status}
                      >
                        <option value="waiting" selected={cartProduct.status.toLowerCase() === 'waiting'}>waiting</option>
                        <option value="processing" selected={cartProduct.status.toLowerCase() === 'processing'}>processing</option>
                        <option value="done" selected={cartProduct.status.toLowerCase() === 'done'}>done</option>
                      </select>
                    </td>
                    <td className='d-flex justify-content-center'>
                      <button className="btn btn-danger" onClick={() => {  }}>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

