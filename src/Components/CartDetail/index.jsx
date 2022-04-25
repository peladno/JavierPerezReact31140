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
      <div className={styles.cartList}>
        <h1 className={styles.cartTitle}>Tus productos</h1>
        {cart.length > 0 ?
          cart.map((item) => (
            <div className={styles.cartItem}>
              <img src={item.image_url} alt={item.name} />
              <h2>{item.name}</h2>
              <div>
                <h3>Cantidad</h3>
                <p>{item.count}</p>
              </div>
              <div>
                <h3>Precio</h3>
                <p>$ {item.price * item.count}</p>
              </div>
              <IconButton><DeleteForeverIcon style={{color: "red"}} onClick={()=>removeCart(item.id)} /></IconButton>
            </div>
          )): <p className={styles.cartNotification}>No hay productos en tu carrito</p>}
        <div className={styles.cartTotalSection}>
          <h3>SubTotal</h3>
          <p>{total}</p>
          <Button variant="contained" onClick={clearCart}>Comprar</Button>
        </div>
      </div>
    </div>
  



  )
}

export default CartDetail;