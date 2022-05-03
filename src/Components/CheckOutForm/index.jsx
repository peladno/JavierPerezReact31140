import React, { useState, useContext, useEffect} from 'react';
import { CartContext } from '../CartContext'
import { addDoc, collection, getFirestore, serverTimestamp, doc, getDoc } from "firebase/firestore";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./index.module.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function CheckOutForm() {

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");


  const [checkoutCode, setCheckoutCode] = useState("");
  
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

  /*const [item, setItem] = useState([]);

  useEffect(() => {
    const dataBase = getFirestore();

    const products = doc(dataBase, 'orders', checkoutCode);

    getDoc(products)
    .then((res) => {
      setItem({ id: res.id, ...res.data() });
    }).catch((err) => {
      console.log("error: ", err);
    });

  }, [checkoutCode]);

  console.log(item)*/

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.formContainer}>
        <form className={styles.checkoutForm} onSubmit={(e) => { e.preventDefault(); sendOrder() }}>
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
            <Button onClick={handleOpen} type="submit" variant="contained">Enviar</Button>
          }
        </form>
      
      {
        checkoutCode === ""? null : 
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              N° Orden de compra:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {checkoutCode}
            </Typography>
          </Box>
        </Modal>
      }
      
    </div>
  );

}

export default CheckOutForm