import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/index.jsx";
import { CustomFetchItemDetail } from "../Utils/CustomFetchProducts.jsx";
import products from '../Utils/Products.jsx';
import { useParams } from "react-router-dom";
import styles from "./index.module.css";


const ItemDetailContainer = () => {
 
  const [item, setItem] = useState([]);
  const { id } = useParams()

  useEffect (() => {
    CustomFetchItemDetail(0, products, id)
    .then(resultado => setItem(resultado))
    .catch(error =>console.error(error))

  }, [id])
  
  return (
    <div className={styles.itemContainer}> 
      <ItemDetail {...item}/>
    </div>
  )
}

export default ItemDetailContainer;