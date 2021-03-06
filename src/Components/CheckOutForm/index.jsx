import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext'
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import Button from '@mui/material/Button';
import styles from "./checkoutForm.module.css";
import ModalForm from '../ModalForm/index';
import SendIcon from '@mui/icons-material/Send';



function CheckOutForm() {

  const { cart, totalPrice, clearCart } = useContext(CartContext);


  //estados donde se guardan datos del formulario
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  //estado que guarda id de la compra
  const [checkoutCode, setCheckoutCode] = useState(" ");
  
  const order = {
    buyer: {name: name, phone: phone, email: email, address: address},
    items: cart,
    total: totalPrice,
    date: serverTimestamp()
  }

  //Petición a Firebase de id de aorden de compra
  const sendOrder = () => {
    const dataBase = getFirestore();
    const ordersCollection = collection(dataBase, "orders");

    addDoc(ordersCollection, order).then(({ id }) => {
      setCheckoutCode(id);
      clearCart();
      setLoading(true)
    })
  }

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.formContainer}>
        <form className={styles.checkoutForm} onSubmit={(e) => { e.preventDefault(); sendOrder(); setModalOpen(true); }}>
        <h1 className={styles.titleForm}>Checkout</h1>
          <div className={styles.inputGroup}>
            <input className={styles.input} type="text" name='name' value={name} onChange={(e) => { setName(e.currentTarget.value) }} required maxLength={100}/>
            <label className={styles.userLabel}>Nombre</label>
          </div>
          <div className={styles.inputGroup}>
            <input className={styles.input} type="tel" name='phone' value={phone} onChange={(e) => { setPhone(e.currentTarget.value) }} required title="Solo utilice números" pattern="[0-9]{6,20}" maxLength={30}/>
            <label className={styles.userLabel}>Telefono</label>
          </div>
          <div className={styles.inputGroup}>
            <input className={styles.input} type="email" name='email' value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="nombre@ejemplo.com" maxLength={200}/>
            <label className={styles.userLabel}>Email</label>
          </div>
          <div className={styles.inputGroup}>
            <input className={styles.input} type="text" name='address' value={address} onChange={(e) => { setAddress(e.currentTarget.value) }} required maxLength={200}/>
            <label className={styles.userLabel}>Dirección</label>
          </div>
          {cart.length === 0? 
            <Button variant="contained" disabled>Enviar</Button> :
            <Button type="submit" variant="contained"><SendIcon/>Enviar</Button>}
        </form>
        {/*Modal, se pasan el id a modal por props. Al hacer submit el estado de modal pasa a ser true y se abre */}
        {modalOpen && <ModalForm loading={loading} setOpenModal={setModalOpen} checkoutCode={checkoutCode}/>}
    </div>
  );

}

export default CheckOutForm