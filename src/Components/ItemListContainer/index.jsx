import React from "react";
import ItemCount from "../ItemCount.jsx";

export default function ItemListContainer() {

  return (
    <>
      <div>
        <ItemCount stock = {5} initial ={1}/>
      </div>
    </>
  );
}
