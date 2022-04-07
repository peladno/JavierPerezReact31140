import React from 'react'
import Item from '../Item/index.jsx';

function ItemList({products}) {
  return (
    products.map ((products) =>(
      <Item
      key={products.id}
      name={products.name}
      price={products.price}
      description={products.description}/>
    ))
  )
}

export default ItemList