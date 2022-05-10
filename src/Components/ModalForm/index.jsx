import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ClearIcon from '@mui/icons-material/Clear';
import { Waveform } from '@uiball/loaders'





function ModalForm({ setOpenModal, checkoutCode, loading }) {

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

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
      {!loading? 
          <div className={styles.loading}>
            <Waveform 
            size={80}
            lineWeight={3.5}
            speed={1} 
            color="black" />
          </div> :
      <>
        <div className={styles.titleCloseBtn}>
          <Link to={"/"}>
            <Button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <ClearIcon/>
            </Button>
          </Link>
        </div> 
        <div className={styles.title}>
          <h1>Muchas Gracias por su compra</h1>
          <h2>Su número de orden de compra es el:</h2>
          <p>{checkoutCode}</p>
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
      </>
    }
        
      </div>
    </div>
  );
}
      
export default ModalForm;