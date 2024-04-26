import React, { useEffect, useState } from 'react'
import style from './GridItems.module.css'
import Product from '../product/Product'

export default function GridItems({url}) {
  const [products, setProducts] = useState(undefined);
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
    });
  }, []);

  if (products === undefined) {
    return (
      <div className={style.loading}>
        <div className="spinner-border mx-auto" role="status">
          
        </div>
      </div>
    );
  } else {
    return (
    
      <div className={`flex-column justify-content-center align-items-center`}>
        <div className={`${style.gridContainer} mx-auto`}>
          {products.map((product) => {
            return (
              <div className={`${style.gridItem}`} >
                <Product product={product} key={product.id}/>
              </div>
            );
          })}
        </div>
      </div>
    
    );
  }
}

