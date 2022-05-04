import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext'
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import Button from '@mui/material/Button';
import styles from "./index.module.css";
import ModalForm from '../ModalForm/index';

function CheckOutForm() {

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");


  const [checkoutCode, setCheckoutCode] = useState(" ");
  
  const order = {
    buyer: {name: name, phone: phone, email: email, address: address},
    items: cart,
    total: totalPrice,
    date: serverTimestamp()
  }

  const sendOrder = () => {
    const dataBase = getFirestore();
    const ordersCollection = collection(dataBase, "orders");

    addDoc(ordersCollection, order).then(({ id }) => {
      setCheckoutCode(id);
      clearCart();
    })
  }

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.formContainer}>
        <form className={styles.checkoutForm} onSubmit={(e) => { e.preventDefault(); sendOrder(); setModalOpen(true); }}>
        <h1 className={styles.titleForm}>Checkout</h1>
          <p>Nombre:</p>
          <input type="text" name='name' value={name} onChange={(e) => { setName(e.currentTarget.value) }} required/>
          <p>Telefono:</p>
          <input type="text" name='phone' value={phone} onChange={(e) => { setPhone(e.currentTarget.value) }} required/>
          <p>Email:</p>
          <input type="text" name='email' value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} required/>
          <p>Dirección:</p>
          <input type="text" name='address' value={address} onChange={(e) => { setAddress(e.currentTarget.value) }} required/>
          {
            cart.length === 0? 
            <Button variant="contained" disabled>Enviar</Button> :
            <Button type="submit" variant="contained"
            >
              Enviar
            </Button>
          }
        </form>
        {modalOpen && <ModalForm setOpenModal={setModalOpen} checkoutCode={checkoutCode}/>}
    </div>
  );

}

export default CheckOutForm