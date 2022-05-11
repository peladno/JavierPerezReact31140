import React, { useContext } from 'react';
import { CartContext } from "../CartContext"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styles from "./index.module.css"
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom"

const CartDetail = () => {
const { cart, removeCart, totalPrice} = useContext(CartContext); 


  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartList}>
        <h1 className={styles.cartTitle}>Tus productos</h1>
        {cart.length > 0 ?
          cart.map((item) => (
            <div className={styles.cartItem} key={item.id}>
              <img src={item.image_url} alt={item.name} />
              <h2>{item.name}</h2>
              <div className={styles.quantityItem}>
                <h3>Cantidad</h3>
                <p>{item.count}</p>
              </div>
              <div className={styles.priceItem}>
                <h3>Precio</h3>
                <p>${item.price * item.count}</p>
              </div>
              <IconButton onClick={()=>removeCart(item.id)}><DeleteForeverIcon className={styles.delete} style={{color: "red"}} /></IconButton>
            </div>
          )): <p className={styles.cartNotification}>No hay productos en tu carrito</p>}
        <div className={styles.cartTotalSection}>
          <h3>SubTotal</h3>
          <p>$ {totalPrice}</p>
          {cart.length === 0?
          <Button variant="contained" disabled>Comprar</Button> : 
          <Link to={"/checkOut"} style={{textDecoration:"none"}}><Button variant="contained">Comprar</Button></Link>}
          <Link to={"/"} style={{textDecoration:"none"}}><Button variant="contained">Seguir Comprando</Button></Link>
        </div>
      </div>
    </div>
  



  )
}

export default CartDetail;