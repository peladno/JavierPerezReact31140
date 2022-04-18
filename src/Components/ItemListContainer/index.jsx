import React, { useState, useEffect } from "react"; 
import ItemList from "../ItemList/index.jsx";
import { CustomFetchProducts } from "../Utils/CustomFetchProducts.jsx";
import products from "../Utils/Products.jsx";
import { useParams } from "react-router-dom";
import styles  from "./index.module.css";

const ItemListContainer = () => {
  const [item, setItem] = useState ([]);

  const {category} = useParams ();

  useEffect (() => {
    CustomFetchProducts(0, products, category)
    .then(resultado => setItem(resultado))
    .catch(error =>console.error(error))

  }, [category]);

  return (
    <>
      <div className={styles.itemListContainer}>
        <ItemList products={item}/>
      </div>
    </>
  );

  
}

export default ItemListContainer
