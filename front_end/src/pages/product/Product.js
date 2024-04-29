import React, { useEffect, useState } from 'react'
import Path from '../../components/path/Path';
import style from './Product.module.css';
import ImageComponent from './components/ImageComponent';
import InfoComponent from './components/InfoComponent';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { productID } = useParams();
  const [product, setProduct] = useState(undefined);
  const paths = ['Trang Chủ', 'Tất cả sản phẩm', product ? product.ptitle : 'Product'];
  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost/BE/?c=product&a=list&search=${productID}`, {
        method: 'GET',
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    fetchData().then((data) => {
      setProduct(data[0]);
    });
  }, []);
  return (
    <>
      <Path paths={paths}/>
      {product ? 
        <div className={style.container}>
          <ImageComponent product={ product } />
          <InfoComponent product={ product }/>
        </div>
        :
        <div className={style.loading}>
          <div className="spinner-border mx-auto" role="status"></div>
        </div>
      }
      
    </>
  )
}
