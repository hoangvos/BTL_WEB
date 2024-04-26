import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Path from '../../components/path/Path'
import CartContainer from './CartContainer';

export default function Cart() {
  const [nItem, setNItem] = useState(0);
  const paths = ['Trang Chủ', `Giỏ Hàng (${nItem})`];
  return (
    <>
      <Header />
      <Path paths={paths} />
      <CartContainer/>
      <Footer />
    </>
  )
}
