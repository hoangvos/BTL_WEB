import {Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Product from './pages/product/Product';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Collection from './pages/collections/Collection';
import { CartProvider } from './context/CartContext';
import Login from './pages/account/Login';
import Register from './pages/account/Register';



function App() {
  return (
    <>
      <CartProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product' element={<Product />} />
          <Route
            path='/collections/:collectionName'
            element={<Collection API_URL={'http://localhost/BE/?c=product&a=list'}/>}
          />
          <Route
            path='/products/:productID'
            element={<Product/>}
          />
          <Route
            path='/account/login'
            element={<Login/>}
          />
          <Route
            path='/account/register'
            element={<Register/>}
          />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
