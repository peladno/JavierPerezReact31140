import React, { useState } from 'react'


function ItemCount({stock, initial, onAdd}) {
  const [ count, setCount] = useState(initial)

  function adding() {
    if (count < stock)
    setCount(count + 1);
  }

  function subs() {
    if (count > 1)
    setCount(count - 1);
  }


  return (
    <>
      <div>
        <div>
          <button variant="contained" onClick={subs}>-</button>
          <p>{count}</p>
          <button variant="contained" onClick={adding}>+</button>
        </div>
        <button variant="contained" onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </>
  )
}

export default ItemCount

