import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Men from './pages/collections/Men'
import Woman from './pages/collections/Woman'
import Cart from './pages/cart/Cart';
import Product from './pages/product/Product';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nam' element={<Men />} />
        <Route path='/nu' element={<Woman />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
