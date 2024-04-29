import React, { useContext, useState } from 'react'
import Cookies from 'js-cookie'
import style from './InfoComponent.module.css'
import { CartContext } from '../../../context/CartContext';

export default function InfoComponent({ product }) {
  const { setCartProducts } = useContext(CartContext);
  const sizes = [
    {
      id: 1,
      soLuong: 10,
      size: 39
    },
    {
      id: 2,
      soLuong: 30,
      size: 40
    },
    {
      id: 3,
      soLuong: 40,
      size: 41
    },
    {
      id: 4,
      soLuong: 0,
      size: 42
    },
    {
      id: 5,
      soLuong: 10,
      size: 43
    },
    {
      id: 6,
      soLuong: 20,
      size: 44
    },
    {
      id: 7,
      soLuong: 87,
      size: 45
    },
  ]
  const [sizeIndex, setSizeIndex] = useState(0);
  const [soLuong, setSoLuong] = useState(1);
  const handleClickSize = (index) => {
    setSizeIndex(index);
  }
  const handleClickIncreaseSoLuong = () => {
    if(soLuong < sizes[sizeIndex].soLuong)
      setSoLuong(soLuong + 1);
  }
  const handleClickDecreaseSoLuong = () => {
    if(soLuong > 1)
      setSoLuong(soLuong - 1);
  }
  const handleClickDatMua = () => {
    // Cookies.set(`cart${sizes[sizeIndex].id}`, `{size:${sizes[sizeIndex].size}, product: ${JSON.stringify(product)}}`);
    const jsonProduct = {
      size: sizes[sizeIndex].size,
      soLuong: soLuong,
      product: product
    }
    Cookies.set(`cart${sizes[sizeIndex].id}`, `${JSON.stringify(jsonProduct)}`);
    setCartProducts(() => {
      let temProducts = [];
      const cookies = Cookies.get();
      for (const key in cookies) {
        if(key.includes('cart')) {
          const sizeID = key.slice(4);
          const product = JSON.parse(cookies[key]);   
          temProducts.push({sizeID, product});
        }
      }
      return temProducts;
    });
  }


  if (!product) return null;
  return (
    <div className={style.infoContainer}>
      <div className={style.title}>
        {product.ptitle}
      </div>
      <div className={style.price}>
        {product.pprice} ₫
      </div>
      <div className={style.status}>
        Tình trạng: 
        <strong>
          {
            sizes[sizeIndex].soLuong > 0 ?
              ` Còn hàng (${sizes[sizeIndex].soLuong})` : ' Hết hàng'
          }
        </strong>
      </div>
      <div className={style.sizeContainer}>
        <span>Kích thước:</span><br />
        <div className={style.sizeButtonContainer}>
          {sizes.map((size, index) => {

            return (
              <button
                className={`${style.size} ${index === sizeIndex && style.active}`}
                onClick={() => handleClickSize(index)}
                key={size.size}
              >
                {size.size}
              </button>
            );
          })}
        </div>
      </div>
      <div className={style.soLuong}>
        <button onClick={handleClickDecreaseSoLuong}>-</button>
        <span>{soLuong}</span>
        <button onClick={handleClickIncreaseSoLuong}>+</button>
      </div>
      <div className={style.datMuaContainer}>
          <div className={style.datMua}>
            <div className={style.colorHover}></div>
            <button onClick={handleClickDatMua}>ĐẶT MUA ONLINE</button>
          </div>
        <div className={style.tuVan}>
          <button disabled>TƯ VẤN: <span>0366592599</span></button>
        </div>
      </div>
      <div className={style.policy}>
        <ul>
          <li>
            <img
              src='https://theme.hstatic.net/1000230642/1001205219/14/service_ic_1.png?v=651'
              alt='iconImg'
              style={{ width: '32px' , height: 'auto', marginRight: '10px'}}
            />
            <span>Cam kết chính hãng 100%</span>
          </li>
          <li>
            <img
              src='https://theme.hstatic.net/1000230642/1001205219/14/service_ic_2.png?v=651'
              alt='iconImg'
              style={{ width: '32px' , height: 'auto', marginRight: '10px'}}
            />
            <span>Bảo hành 03 tháng</span>
          </li>
          <li>
            <img  
              src='https://theme.hstatic.net/1000230642/1001205219/14/service_ic_3.png?v=651'
              alt='iconImg'
              style={{ width: '32px' , height: 'auto', marginRight: '10px'}}
            />
            <span>Đổi size trong vòng 7 ngày</span>
          </li>
          <li>
            <img
              src='https://theme.hstatic.net/1000230642/1001205219/14/service_ic_4.png?v=651'
              alt='iconImg'
              style={{ width: '32px' , height: 'auto', marginRight: '10px'}}
            />
            <span>Đổi trả hàng trong vòng 7 ngày</span>
          </li>
          <li>
            <img
              src='https://theme.hstatic.net/1000230642/1001205219/14/service_ic_5.png?v=651'
              alt='iconImg'
              style={{ width: '32px' , height: 'auto', marginRight: '10px'}}
            />
            <span>Free ship đơn hàng 1.5 Triệu</span>
          </li>
          <li>
            <img
              src='https://theme.hstatic.net/1000230642/1001205219/14/service_ic_6.png?v=651'
              alt='iconImg'
              style={{ width: '32px' , height: 'auto', marginRight: '10px'}}
            />
            <span>Hỗ trợ giao hàng 2h khi chọn hình thức vận chuyển Grab. Áp dụng khu vực HCM T2 - T7 (8H00 - 11H00 và 14H00 - 16H00</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
