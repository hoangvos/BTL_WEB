import React from 'react'

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import Path from '../../components/path/Path';
import bannerRong from '../../assets/banner/banner_rong.webp';
import CategoryComponent from '../../components/category/Category';
import style from './Collection.module.css';

function ImageBanner({ path}) {
  return (
    <img src={path} alt='xxx' className={`${style.bannerImage}`} draggable="false"/>
  );
}



export default function Men() {
  const paths = ['Trang Chủ', 'Danh Mục', 'Nữ'];
  return (
    <>
      <Header/>
      <Path paths={paths} />
      <ImageBanner path={bannerRong} />
      <CategoryComponent name="woman"/>
      <Footer /> 
    </>
  )
}
