import React, { useState, useEffect } from "react"; 
import ItemCount from "../ItemCount.jsx";
import ItemList from "../ItemList/index.jsx";
import CustomFetch from "../Utils/CustomFetch.jsx";
import products from "../Utils/Products.jsx";


export default function ItemListContainer() {
  const [item, setItem] = useState ([]);

  useEffect (() => {
    CustomFetch(2000, products)
    .then(resultado => setItem(resultado))
    .catch(error =>console.error(error))

  }, [item])

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

