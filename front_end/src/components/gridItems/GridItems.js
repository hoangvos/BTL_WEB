import React, { useEffect, useState } from 'react'
import style from './GridItems.module.css'
import Product from '../product/Product'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {
  SET_DANH_SACH_SAN_PHAM,
  SET_SAN_PHAM_NAM,
  SET_SAN_PHAM_NAM_HUNTER,
  SET_SAN_PHAM_NAM_SANDAL,
  SET_SAN_PHAM_NAM_THE_THAO,
  SET_SAN_PHAM_NAM_CHAY_BO,
  SET_SAN_PHAM_NAM_DA_BANH,
  SET_SAN_PHAM_NAM_TAY,
  SET_SAN_PHAM_NAM_DEP,
  SET_SAN_PHAM_NU,
  SET_SAN_PHAM_NU_HUNTER,
  SET_SAN_PHAM_NU_GOSTO,
  SET_SAN_PHAM_NU_SANDAL,
  SET_SAN_PHAM_NU_BUP_BE,
  SET_SAN_PHAM_NU_THOI_TRANG,
  SET_SAN_PHAM_NU_CHAY_BO,
  SET_SAN_PHAM_NU_THE_THAO,
  SET_SAN_PHAM_NU_DEP,
  SET_SAN_PHAM_NU_TUI_XACH,
  SET_SAN_PHAM_BE_TRAI,
  SET_SAN_PHAM_BE_TRAI_SANDAL,
  SET_SAN_PHAM_BE_TRAI_THE_THAO,
  SET_SAN_PHAM_BE_TRAI_DEP,
  SET_SAN_PHAM_BE_GAI,
  SET_SAN_PHAM_BE_GAI_BUP_BE,
  SET_SAN_PHAM_BE_GAI_THE_THAO,
  SET_SAN_PHAM_BE_GAI_SANDAL,
  SET_SAN_PHAM_BE_GAI_DEP,
  SET_SAN_PHAM_BE_GAI_TAP_DI,
  SET_SAN_PHAM_ALL,
  SET_CHI_TIET_SAN_PHAM
} from '../../redux/actions/Types/ManageProductType'
import { layDanhSachSanPhamAction } from '../../redux/actions/ManageProductAction';


export default function GridItems({ collectionName }) {
  const { arrProduct } = useSelector(state => state.QuanLySanPhamReducer);
  const dispatch = useDispatch();
  let action = undefined;

  useEffect(() => {
    const action = layDanhSachSanPhamAction();
    dispatch(action); 
  }, [dispatch])
  
  useEffect(() => {
    switch (collectionName) {
      case 'nam':
        action = { type: SET_SAN_PHAM_NAM };
        dispatch(action);
        break;
      case 'nu':
        action = { type: SET_SAN_PHAM_NU };
        dispatch(action);
        break;
    }
  }, [collectionName])
  

  

  return (
    
    <div className={`flex-column justify-content-center align-items-center`}>
      <div className={`${style.gridContainer} mx-auto`}>
        {arrProduct.map((product) => {
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

