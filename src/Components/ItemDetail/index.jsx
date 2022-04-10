import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div>
        <div key = {product.id} >
          <img src= {product.image} alt = {product.name} />
          <h2>{product.name}</h2>
          <h3>${product.price}</h3>
          <p>{product.description}</p>
        </div>
    </div>
  )
}

export default ItemDetail;