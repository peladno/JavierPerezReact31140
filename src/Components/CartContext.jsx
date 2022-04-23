import React, { useState, createContext } from 'react'

export const CartContext = createContext();

const CartContextProvider = ( { children } ) => {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {

    const indexProduct = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (indexProduct !== -1) {
      const newCart = [...cart];

      newCart[indexProduct].count = newCart[indexProduct].count + item.count;
      setCart(newCart);

    } else {
      setCart([...cart, item]);
    }
  };

  console.log(cart)


  const removeCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  }

  const clearCart = () => setCart([]);


  return (
    <CartContext.Provider value={{cart, addToCart, removeCart, clearCart}}>
      {children}
    </CartContext.Provider>  
  )
}

export default CartContextProvider;