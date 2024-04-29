import { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'

export const CartContext = createContext();
export function CartProvider({children}) {
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    setCartProducts(() => {
      let temProducts = [];
      const cookies = Cookies.get();
      for (const key in cookies) {
        if(key.includes('cart')) {
          const sizeID = key.slice(4);
          const product = JSON.parse(cookies[key]);   
          temProducts.push({sizeID, product});
        }
      }
      return temProducts;
    });
  }, []);

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartContext.Provider>
  );
}

