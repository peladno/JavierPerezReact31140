import React, { useState, useEffect } from "react"; 
import ItemList from "../ItemList/index.jsx";
import { CustomFetchProducts } from "../Utils/CustomFetchProducts.jsx";
import products from "../Utils/Products.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [item, setItem] = useState ([]);

  const {category} = useParams ();

  useEffect (() => {
    CustomFetchProducts(2000, products, category)
    .then(resultado => setItem(resultado))
    .catch(error =>console.error(error))

  }, [category]);

  return (
    <>
      <div>
        <ItemList products={item}/>
      </div>
    </>
  );

  
}

export default ItemListContainer
