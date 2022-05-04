import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";


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
          <h1>Numero de orden:</h1>
        </div>
        <div className={styles.body}>
          <p>{checkoutCode === " "? <>loading...</> : checkoutCode}</p>
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