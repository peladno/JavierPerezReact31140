import React from "react";
import ItemCount from "../ItemCount.jsx";


export default function ItemListContainer() {

  function onAdd (count) {
    alert('Se agregó ' + count +' productos al carrito')
  }

  return (
    <>
      <div>
        <ItemCount stock = {5} initial ={1} onAdd = {onAdd}/>
      </div>
    </>
  );

  
}

