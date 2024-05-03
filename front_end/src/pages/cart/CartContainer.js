import React from 'react'
import style from './Cart.module.css';
import CartProduct from './CartProduct';


export default function CartContainer({ cartProducts, updateCartProducts, totalPrice, nItem }) {
  return (
    <div className={`${style.container}`}>
      <div className={style.wrapContent}>
        <div className={`${style.yourCart}`}>
          <h4>GIỎ HÀNG CỦA BẠN</h4>
          
          {cartProducts.length > 0 ?
            <>
              <div>Bạn đang có <b>{nItem} sản phẩm</b> trong giỏ hàng</div>
              <div className={style.products}>
              {
                cartProducts.map((product, index) => {
                  return (
                    <CartProduct product={product} updateCartProducts = {updateCartProducts} />
                  );
                })
              }
              </div>
            </>
            :
            <p
              style={{
                fontSize: 17,
                padding: '20px 15px',
                fontWeight: 500
              }}
            >Giỏ hàng của bạn đang trống</p>
          }
          
        </div>
        <div className={style.orderInfor}>
          <p>THÔNG TIN ĐƠN HÀNG</p>
          <div className={style.price}>
            <div>Tổng tiền</div>
            <div>{totalPrice} ₫</div>
          </div>
        </div>
      </div>
    </div>
  )
}
