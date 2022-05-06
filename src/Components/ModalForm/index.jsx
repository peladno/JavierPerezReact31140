import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
//import ClearIcon from '@mui/icons-material/Clear';


function ModalForm({ setOpenModal, checkoutCode }) {

  const [itemCheckout, setItemCheckout] = useState([]);

  useEffect(() => {
    const dataBase = getFirestore();

    const products = doc(dataBase, 'orders', checkoutCode);

    getDoc(products)
    .then((res) => {
      setItemCheckout({ id: res.id, ...res.data() });
    }).catch((err) => {
      console.log("error: ", err);
    });

  }, [checkoutCode]);

  console.log(itemCheckout);

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <Link to={"/"}>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </Link>
        </div>
        <div className={styles.title}>
          <h1>Orden de compra n°: {checkoutCode}</h1>
        </div>
        <div className={styles.body}>

          <h3>Resumen:</h3>
          {itemCheckout?.items?.map((item) =>{
              return <div className={styles.itemList} key={item.id}> <p>x{item.count}</p><p>{item.art_name}</p> <p>${item.price}</p></div>
            })}
        </div>
        <div className={styles.footer}> 
        <Link style={{textDecoration:"none"}} to={"/"}>
          <Button variant="contained">
            Home
          </Button>
        </Link>
        </div>
      </div>
    </div>
  );
}
      
export default ModalForm;