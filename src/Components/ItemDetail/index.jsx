import React from 'react'
import ItemCount from '../ItemCount.jsx';
import styles from "./index.module.css"

const ItemDetail = ({id, image_url, name,  price, art_name, year, description}) => {
  return (
    <>
        <div className={styles.itemDetailContainer} key={id}>
          <img src= {image_url} alt = {name} />
          <h2>{name}</h2>
          <h3>${price}</h3>
          <h4>Art name: {art_name}</h4>
          <h4>Year: {year}</h4>
          <p>{description}</p>
          <ItemCount stock = {5} initial ={1} />
        </div>
    </>
  )
}

export default ItemDetail;