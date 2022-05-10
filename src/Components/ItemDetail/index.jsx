import React, { useState , useContext} from 'react';
import ItemCount from '../ItemCount.jsx';
import Button from '@mui/material/Button';
import styles from "./index.module.css";
import { CartContext } from "../CartContext.jsx";
import { Link } from "react-router-dom";


const ItemDetail = ({item}) => {

  const [number, setNumber] = useState(0);

  const { addToCart } = useContext(CartContext);

  const addCart = (count) => {
    setNumber(count);
    addToCart({...item, count});
  }


  return (
    <>
        <div className={styles.itemDetailContainer} key={item.id}>
          <img className={styles.image} src= {item.image_url} alt ={item.name} />
          <div className={styles.itemDescription}>
            <h1>{item.name}</h1>
            <p>Precio: ${item.price}</p>
            <h2>Art name: {item.art_name}</h2>
            <h2>Year: {item.year}</h2>
            <p>{item.description}</p>
            <p>Stock: {item.stock}</p>
            <div className={styles.shoppingButtons}>
              {number> 0 ?  <Link to={"/cart"} style={{textDecoration:"none"}}><Button className={styles.carritoButton} variant="contained">Ir al carrito</Button></Link> : 
              <ItemCount stock = {item.stock} initial ={1} addCart={addCart} />}
              <Link className={styles.continue} to={"/"} style={{textDecoration:"none"}}><Button variant="contained">Seguir Comprando</Button></Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default ItemDetail;