import React, { useContext } from 'react';
import { CartContext } from "../CartContext"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styles from "./index.module.css"
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const CartDetail = () => {
const { cart, removeCart, clearCart} = useContext(CartContext); 
const total = cart.reduce((total, item) => total + item.count * item.price, 0);


  return (
    <div className={styles.cartContainer}>
      {cart.length > 0 ?
        cart.map((item) => (
          <div className={styles.cartItem}>
            <img src={item.image_url} alt={item.name} />
            <h2>{item.name}</h2>
            <h3>Cantidad</h3>
            <p>{item.count}</p>
            <p>{item.price * item.count}</p>
            <IconButton><DeleteForeverIcon style={{color: "red"}} onClick={()=>removeCart(item.id)} /></IconButton>
          </div>
        )): <p>No hay productos tu carrito</p>}
      <h3>SubTotal</h3>
      <p>{total}</p>
      <Button variant="contained" onClick={clearCart}>Comprar</Button>
    </div>
  



  )
}

export default CartDetail;