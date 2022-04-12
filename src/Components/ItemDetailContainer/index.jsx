import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/index.jsx";
import CustomFetchProducts from "../Utils/CustomFetchProducts.jsx";
import product from '../Utils/Product.jsx';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
 
  const [item, setItem] = useState({});
  const { id } = useParams()

  useEffect (() => {
    CustomFetchProducts(2000, product)
    .then(resultado => setItem(resultado))
    .catch(error =>console.error(error))

  }, [id])

  return (
    <>
      <ItemDetail product={item} />
    </>
  )
}

export default ItemDetailContainer;