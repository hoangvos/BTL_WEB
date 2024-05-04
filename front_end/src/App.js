import {Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Product from './pages/product/Product';
import Collection from './pages/collections/Collection';
import { CartProvider } from './context/CartContext';
import Login from './pages/account/Login';
import Register from './pages/account/Register';
import Layout from './pages/layout/Layout';
import ManageProduct from './pages/admin/manageProduct/ManageProduct';
import CreateProduct from './pages/admin/createProduct/CreateProduct';
import UpdateProduct from './pages/admin/updateProduct/UpdateProduct';
import Search from './pages/search/Search';

function App() {
  return (
    <>
      <CartProvider>
        {/* <Header /> */}
        <Routes>
          <Route path='/createProduct' element={<CreateProduct />} />
          <Route path='/manageProduct' element={<ManageProduct />} />
          <Route path='/updateProduct/:productID' element={<UpdateProduct />} />
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<Home />} />
            <Route path='/search/:searchTerm' element={<Search />} />
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
          </Route>
        </Routes>
        
      </CartProvider>
    </>
  );
}

export default App;
