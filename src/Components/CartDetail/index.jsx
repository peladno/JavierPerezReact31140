import React, { useContext } from 'react';
import { CartContext } from "../CartContext"

const CartDetail = () => {
const { cart, removeCart, clearCart } = useContext(CartContext); 

  return (
    <>
      {cart.map((item) => (

          <div>
            <img src={item.image_url} alt={item.name} />
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            <button onClick={()=>removeCart(item.id)}>Remove</button>
          </div>
        ))}
      <button onClick={clearCart}>Clear</button>
    
    </>
  



  )
}

export default CartDetail;