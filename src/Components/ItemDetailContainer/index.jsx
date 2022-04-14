import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/index.jsx";
import { CustomFetchItemDetail } from "../Utils/CustomFetchProducts.jsx";
import products from '../Utils/Products.jsx';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
 
  const [item, setItem] = useState([]);
  const { id } = useParams()

  useEffect (() => {
    CustomFetchItemDetail(2000, products, id)
    .then(resultado => setItem(resultado))
    .catch(error =>console.error(error))

  }, [id])
  
  return (
    <>
      <ItemDetail {...item}/>
    </>
  )
}

export default ItemDetailContainer;