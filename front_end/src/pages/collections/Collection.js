import React, { useState } from 'react'

import Path from '../../components/path/Path';
import bannerRong from '../../assets/banner/banner_rong.webp';
import CategoryComponent from '../../components/category/Category';
import style from './Collection.module.css';
import GridItems from '../../components/gridItems/GridItems';
import { useParams } from 'react-router-dom';
import Filter from '../../components/filter/Filter';

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
    case 'nam-hunter':
      namePath = "Hunter Nam";
      break
    case 'nam-sandal':
      namePath = "Sandal Nam";
      break
    case 'nam-the-thao':
      namePath = "Giày Thể Thao Nam";
      break
    case 'nam-chay-bo':
      namePath = "Giày Chạy Bộ Nam";
      break
    case 'nam-da-banh':
      namePath = "Giày Đá Banh Nam";
      break
    case 'nam-tay':
      namePath = "Giày Tây Nam";
      break
    case 'nam-dep':
      namePath = "Dép Nam";
      break
    case "nu":
      namePath = "Nữ";
      break
    case 'nu-hunter':
      namePath = "Hunter Nữ";
      break
    case 'nu-sandal':
      namePath = "Sandal Nữ";
      break
    case 'nu-bup-be':
      namePath = "Giày Búp Bê Nữ";
      break
    case 'nu-thoi-trang':
      namePath = "Giày Thời Trang Nữ";
      break
    case 'nu-chay-bo':
      namePath = "Giày Chạy Bộ - Đi Bộ Nữ";
      break
    case 'nu-the-thao':
      namePath = "Giày Thể Thao Nữ";
      break
    case 'nu-dep':
      namePath = "Dép Nữ";
      break
    case "be-trai":
      namePath = "Bé Trai";
      break
    case "be-trai-sandal":
      namePath = "Sandal Bé Trai";
      break
    case "be-trai-the-thao":
      namePath = "Giày Thể Thao Bé Trai";
      break
    case "be-trai-dep":
      namePath = "Dép Bé Trai";
      break
    case "be-gai":
      namePath = "Bé Gái";
      break
    case "be-gai-bup-be":
      namePath = "Giày Búp Bê Bé Gái";
      break
    case "be-gai-the-thao":
      namePath = "Giày Thể Thao Bé Gái";
      break
    case "be-gai-sandal":
      namePath = "Sandal Bé Gái";
      break
    case "be-gai-dep":
      namePath = "Dép Bé Gái";
      break
    case "be-gai-tap-di":
      namePath = "Giày tập đi Bé Gái";
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
      
      <GridItems
        collectionName={collectionName}
      />

    </>
  )
  
}
