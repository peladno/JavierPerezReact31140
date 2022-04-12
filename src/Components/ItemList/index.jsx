import React from 'react'
import Item from '../Item/index.jsx';

function ItemList({products}) {
  return (
    products.map ((products) => (
      <Item
      key={products.id}
      image_url={products.image_url}
      name={products.name}
      price={products.price}
      description={products.description}
      category={products.category}/>
    ))
  )
}

export default ItemList