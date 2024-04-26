import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Path from '../../components/path/Path';
import style from './Product.module.css';
import ImageComponent from './components/ImageComponent';
import InfoComponent from './components/InfoComponent';
export default function Product() {
  const paths = ['Trang Chủ', 'Tất cả sản phẩm', 'Sản phẩm ABC'];
  return (
    <>
      <Header />
      <Path paths={paths} />
      <div className={style.container}>
        <ImageComponent />
        <InfoComponent />
      </div>
      <Footer /> 
    </>
  )
}
