import React, { useState } from 'react'
import Path from '../../components/path/Path'
import CartContainer from './CartContainer';

export default function Cart() {
  const [nItem, setNItem] = useState(0);
  const paths = ['Trang Chủ', `Giỏ Hàng (${nItem})`];
  return (
    <>
      <Path paths={paths} />
      <CartContainer/>
    </>
  )
}
