import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div>
        <div key={product.id}>
          <img src= {product.image_url} alt = {product.name} />
          <h2>{product.name}</h2>
          <h3>${product.price}</h3>
          <h4>Art name: {product.art_name}</h4>
          <h4>Year: {product.year}</h4>
          <p>{product.description}</p>
        </div>
    </div>
  )
}

export default ItemDetail;