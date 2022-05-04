import React from "react";
import styles from "./index.module.css";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

function ModalForm({ setOpenModal, checkoutCode }) {


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
          <p>{checkoutCode}</p>
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