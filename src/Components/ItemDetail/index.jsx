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
          <h2>{item.name}</h2>
          <h3>${item.price}</h3>
          <h4>Art name: {item.art_name}</h4>
          <h4>Year: {item.year}</h4>
          <p>{item.description}</p>
          {number> 0 ?  <Link to={"/cart"}><Button variant="contained">Ir al carrito</Button></Link> : <ItemCount stock = {5} initial ={1} addCart={addCart} /> }
        </div>
    </>
  )
}

export default ItemDetail;