import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/index.jsx";
import CustomFetchProducts from "../Utils/CustomFetchProducts.jsx";
import product from '../Utils/Product.jsx';


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  useEffect (() => {
    CustomFetchProducts(3000, product)
    .then(resultado => setItem(resultado))
    .catch(error =>console.error(error))

  }, [])

  return (
    <>
      <ItemDetail product={item}/>
    </>
  )
}

export default ItemDetailContainer;