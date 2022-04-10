import React, { useState, useEffect } from "react"; 
import ItemCount from "../ItemCount.jsx/index.jsx";
import ItemList from "../ItemList/index.jsx";
import CustomFetchProducts from "../Utils/CustomFetchProducts.jsx";
import products from "../Utils/Products.jsx";


const ItemListContainer = () => {
  const [item, setItem] = useState ([]);

  useEffect (() => {
    CustomFetchProducts(2000, products)
    .then(resultado => setItem(resultado))
    .catch(error =>console.error(error))

  }, [])

  function onAdd (count) {
    alert('Se agregó ' + count +' productos al carrito')
  }

  return (
    <>
      <div>
        <ItemCount stock = {5} initial ={1} onAdd = {onAdd}/>
        <ItemList products={item}/>
      </div>
    </>
  );

  
}

export default ItemListContainer
