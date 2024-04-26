import React, { useEffect, useState } from 'react'
import style from './Cart.module.css';
import CartProduct from './CartProduct';

class ProductCartC{
  constructor(images, size, color, title, price, count) {
    this.images = images;
    this.size = size;
    this.color = color;
    this.title = title;
    this.price = price;
    this.count = count;
  }
}


export default function CartContainer() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts([
      new ProductCartC('image', 38, 'ffffff', 'simple title', 543454, 4),
      new ProductCartC('image', 28, '00ff00', 'simple title', 9239, 2),
    ])
  }, [])
  return (
    <div className={`${style.container}`}>
      <div className={`${style.yourCart}`}>
        <h4>GIỎ HÀNG CỦA BẠN</h4>
        <div>Bạn đang có <b>10 sản phẩm</b> trong giỏ hàng</div>
        {products.length > 0 &&
          <div className={style.products}>
          {
            products.map((product, index) => {
              return (
                <CartProduct product={product}/>
              );
            })
          }
          
          </div>
        }
        
      </div>
      <div className={style.orderInfor}>
        <h4>THÔNG TIN ĐƠN HÀNG</h4>
        <div className={style.price}>
          <div>Tổng tiền</div>
          <div>{totalPrice}</div>
        </div>
      </div>
    </div>
  )
}
