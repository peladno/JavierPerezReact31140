import React, { useState } from 'react';
import ItemCount from '../ItemCount.jsx';
import Button from '@mui/material/Button';
import styles from "./index.module.css"

const ItemDetail = ({id, image_url, name,  price, art_name, year, description}) => {

  const [number, setNumber] = useState(0);

  const addCart = (cantidad) => {
    setNumber(cantidad);
  }

  return (
    <>
        <div className={styles.itemDetailContainer} key={id}>
          <img className={styles.image} src= {image_url} alt = {name} />
          <h2>{name}</h2>
          <h3>${price}</h3>
          <h4>Art name: {art_name}</h4>
          <h4>Year: {year}</h4>
          <p>{description}</p>
          {number> 0 ?  <Button variant="contained">Ir al carrito</Button> : <ItemCount stock = {5} initial ={1} addCart={addCart} /> }
        </div>
    </>
  )
}

export default ItemDetail;