import React, { act, useEffect, useMemo, useRef, useState } from 'react'
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
  SET_SAN_PHAM_NU_SANDAL,
  SET_SAN_PHAM_NU_BUP_BE,
  SET_SAN_PHAM_NU_THOI_TRANG,
  SET_SAN_PHAM_NU_CHAY_BO,
  SET_SAN_PHAM_NU_THE_THAO,
  SET_SAN_PHAM_NU_DEP,
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
import Filter from '../filter/Filter';


export default function GridItems({ collectionName}) {
  const { arrProduct } = useSelector(state => state.QuanLySanPhamReducer);
  const dispatch = useDispatch();
  let action = undefined;
  
  const [priceConstraint, setPriceConstraint] = useState([0, 2000000])
  const [indexSortOption, setIndexSortOption] = useState(-1);
  const [products, setProducts] = useState([]); 
  useEffect(() => {
    const action = layDanhSachSanPhamAction();
    dispatch(action); 
    console.log(arrProduct);
  }, [dispatch])
  
  useEffect(() => {
    switch (collectionName) {
      case 'nam':
        action = { type: SET_SAN_PHAM_NAM };
        break;
      case 'nam-hunter':
        action = { type: SET_SAN_PHAM_NAM_HUNTER };
        break;
      case 'nam-sandal':
        action = { type: SET_SAN_PHAM_NAM_SANDAL };
        break;
      case 'nam-the-thao':
        action = { type: SET_SAN_PHAM_NAM_THE_THAO };
        break;
      case 'nam-chay-bo':
        action = { type: SET_SAN_PHAM_NAM_CHAY_BO };
        break;
      case 'nam-da-banh':
        action = { type: SET_SAN_PHAM_NAM_DA_BANH };
        break;
      case 'nam-tay':
        action = { type: SET_SAN_PHAM_NAM_TAY };
        break;
      case 'nam-dep':
        action = { type: SET_SAN_PHAM_NAM_DEP };
        break;
      case 'nu':
        action = { type: SET_SAN_PHAM_NU };
        break;
      case 'nu-hunter':
        action = { type: SET_SAN_PHAM_NU_HUNTER };
        break;
      case 'nu-sandal':
        action = { type: SET_SAN_PHAM_NU_SANDAL };
        break;
      case 'nu-bup-be':
        action = { type: SET_SAN_PHAM_NU_BUP_BE };
        break;
      case 'nu-thoi-trang':
        action = { type: SET_SAN_PHAM_NU_THOI_TRANG };
        break;
      case 'nu-chay-bo':
        action = { type: SET_SAN_PHAM_NU_CHAY_BO };
        break;
      case 'nu-the-thao':
        action = { type: SET_SAN_PHAM_NU_THE_THAO };
        break;
      case 'nu-dep':
        action = { type: SET_SAN_PHAM_NU_DEP };
        break;
      
      case 'be-trai':
        action = { type: SET_SAN_PHAM_BE_TRAI };
        break;
      case 'be-trai-sandal':
        action = { type: SET_SAN_PHAM_BE_TRAI_SANDAL };
        break;
      case 'be-trai-the-thao':
        action = { type: SET_SAN_PHAM_BE_TRAI_THE_THAO };
        break;
      case 'be-trai-dep':
        action = { type: SET_SAN_PHAM_BE_TRAI_DEP };
        break;
      case 'be-gai':
        action = { type: SET_SAN_PHAM_BE_GAI };
        break;
      case 'be-gai-bup-be':
        action = { type: SET_SAN_PHAM_BE_GAI_BUP_BE };
        break;
      case 'be-gai-the-thao':
        action = { type: SET_SAN_PHAM_BE_GAI_THE_THAO };
        break;
      case 'be-gai-sandal':
        action = { type: SET_SAN_PHAM_BE_GAI_SANDAL };
        break;
      case 'be-gai-dep':
        action = { type: SET_SAN_PHAM_BE_GAI_DEP };
        break;
      case 'be-gai-tap-di':
        action = { type: SET_SAN_PHAM_BE_GAI_TAP_DI };
        break;
      default:
        action = { type: SET_SAN_PHAM_ALL };
        break;
    }
    dispatch(action);
  }, [collectionName])
  useEffect(() => {
    if (priceConstraint[0] !== 0 || priceConstraint[1] !== 2000000) {
      const filteredProducts = arrProduct.filter((product) => {
        return Number(product.pprice) >= Number(priceConstraint[0]) &&
          Number(product.pprice) <= Number(priceConstraint[1]);
      });
      setProducts(filteredProducts);  
    } else {
      setProducts(arrProduct); 
    }
  }, [priceConstraint])

  useEffect(() => {
    setProducts(arrProduct);
  }, [arrProduct])

  // useEffect(() => {
  //   let filteredProducts = [];
  //   console.log(indexSortOption);
  //   switch (indexSortOption) {
  //     case 0: //increase price
  //       filteredProducts = products;
  //       filteredProducts.sort((a, b) => {
  //         return a.pprice - b.pprice;
  //       });
  //       setProducts(filteredProducts);
  //       break;
  //     case 1: //decraese price
  //       filteredProducts = products;
  //       filteredProducts.sort((a, b) => {
  //         return b.pprice - a.pprice;
  //       });
  //       setProducts(filteredProducts);
  //       break;
  //     case 2:
  //       break;
  //     case 3:
  //       break;
  //     default: break;
  //   }
  // }, [indexSortOption, products]) 
  
  const sortedProducts = useMemo(() => {
    let sortedProducts = [...products]; // Tạo một bản sao của products
  
    switch (indexSortOption) {
      case 0: // Sắp xếp tăng dần theo giá
        sortedProducts.sort((a, b) => a.pprice - b.pprice);
        break;
      case 1: // Sắp xếp giảm dần theo giá
        sortedProducts.sort((a, b) => b.pprice - a.pprice);
        break;
      case 2: // Sắp xếp theo tên từ A-Z
        sortedProducts.sort((a, b) => a.ptitle.localeCompare(b.ptitle));
        break;
      case 3: // Sắp xếp theo tên từ Z-A
        sortedProducts.sort((a, b) => b.ptitle.localeCompare(a.ptitle));
        break;
      default:
        break;
    }
  
    return sortedProducts;
  }, [products, indexSortOption]);

  return (
    <>
      <Filter
        priceConstraint={priceConstraint}
        setPriceConstraint={setPriceConstraint}
        indexSortOption={indexSortOption}
        setIndexSortOption={setIndexSortOption}
      />
    
      <div className={`flex-column justify-content-center align-items-center`}>
        <div className={`${style.gridContainer} mx-auto`}>
          {sortedProducts.map((product) => {
            return (
              <Link to={`/products/${product.id}`} className={`${style.gridItem}`} key={product.id}>
                <Product product={product} />
              </Link>
            );
          })}
        </div>
      </div >
    </>
  );
}

