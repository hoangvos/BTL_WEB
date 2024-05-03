import React from 'react'

import Path from '../../components/path/Path';
import bannerRong from '../../assets/banner/banner_rong.webp';
import CategoryComponent from '../../components/category/Category';
import style from './Collection.module.css';
import GridItems from '../../components/gridItems/GridItems';
import { useParams } from 'react-router-dom';

function ImageBanner({ path}) {
  return (
    <img src={path} alt='xxx' className={`${style.bannerImage}`} draggable="false"/>
  );
}



export default function Collection() {
  const { collectionName } = useParams();
  let namePath = "";
  switch (collectionName) { 
    case "nam":
      namePath = "Nam";
      break
    case "nu":
      namePath = "Nữ";
      break
    case "be-trai":
      namePath = "Bé Trai";
      break
    case "be-gai":
      namePath = "Bé Gái";
      break
    default:
      namePath = "Lỗi";
  }

  const paths = ['Trang Chủ', 'Danh Mục', namePath];
  return (
    <>
      <Path paths={paths} />
      <ImageBanner path={bannerRong} />
      <CategoryComponent name={collectionName} />
      <GridItems collectionName={ collectionName } />

    </>
  )
  
}
