import React, { useEffect, useState } from 'react'
import style from './GridItems.module.css'
import Product from '../product/Product'
import { Link } from 'react-router-dom'
export default function GridItems({url}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const res = await fetch(url, {
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
      setProducts(data);
      setLoading(false);
    }).catch((err)=>{
      setLoading(false);
      console.log(err);
    });
  }, []);
  return (
    loading ? 
    <div className={style.loading}>
      <div className="spinner-border mx-auto" role="status"></div>
    </div>
      :
    <div className={`flex-column justify-content-center align-items-center`}>
      <div className={`${style.gridContainer} mx-auto`}>
        {products.map((product) => {
          return (
            <Link to={`/products/${product.id}`} className={`${style.gridItem}`}>
                <Product product={product} key={product.id}/>
            </Link>
          );
        })}
      </div>
    </div >
  );
}

