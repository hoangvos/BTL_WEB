import React, { useEffect, useState } from 'react'

import Path from '../../components/path/Path';
import bannerRong from '../../assets/banner/banner_rong.webp';
import CategoryComponent from '../../components/category/Category';
import style from './Collection.module.css';
import GridItems from '../../components/gridItems/GridItems';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { filterProducts } from './FilterItems';


function ImageBanner({ path}) {
  return (
    <img src={path} alt='xxx' className={`${style.bannerImage}`} draggable="false"/>
  );
}



export default function Collection() {
  const { collectionName } = useParams();
  
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const fetchAllProducts = async () => {
    const result = await axios.get(`http://localhost/BE/?c=product&a=list`);
    // const newProducts = filterProducts(result.data, collectionName);
    
    setAllProducts(result.data);
  }
  // console.log('allProducts', allProducts);
  // console.log('products', products);
  useEffect(() => {
    fetchAllProducts();
  }, [])

  useEffect(() => {
    const newProducts = filterProducts(allProducts, collectionName);
    // console.log(newProducts);
    setProducts(newProducts);
  }, [allProducts])

  useEffect(() => {
    const newProducts = filterProducts(allProducts, collectionName);
    // console.log(newProducts);
    setProducts(newProducts);
  }, [collectionName])

  return (
    <>
      <Path collectionName={collectionName} />
      <ImageBanner path={bannerRong} />
      <CategoryComponent name={collectionName} />
      
      <GridItems
        // collectionName={collectionName}
        products={products}
        setProducts={setProducts}
      />

    </>
  )
  
}
