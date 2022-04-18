import React, { useState } from 'react'
import Button from "@mui/material/Button"
import styles from "./index.module.css"


function ItemCount({stock, initial, addCart}) {
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
      <div className={styles.buttonContainer}>
        <div className={styles.buttonContainerCount} >
          <Button variant="contained" size="small"  onClick={subs}>-</Button>
          <p className={styles.count}>{count}</p>
          <Button variant="contained" size="small" onClick={adding}>+</Button>
        </div>
        <Button variant="contained" onClick={() => addCart(count)}>Agregar al carrito</Button>
      </div>
    </>
  )
}

export default ItemCount

