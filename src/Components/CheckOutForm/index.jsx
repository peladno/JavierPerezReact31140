import React, { useState, useContext, useEffect} from 'react';
import { CartContext } from '../CartContext'
import { addDoc, collection, getFirestore, serverTimestamp, doc, getDoc } from "firebase/firestore"

function CheckOutForm() {

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [checkoutCode, setCheckoutCode] = useState("");
  
  const handleOnChange = (e) => {
    setBuyer({
      ...buyer, 
      [e.target.name]: e.target.value
    })
  }

  console.log(buyer)

  const order = {
    buyer: buyer,
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

  /*const [item, setItem] = useState("");

  useEffect(() => {
    const dataBase = getFirestore();

    const products = doc(dataBase, 'orders', 'm7EZiYXADuuBNcOccsii');

    getDoc(products)
    .then((res) => {
      setItem({ id: res.id, ...res.data() });
    }).catch((err) => {
      console.log("error: ", err);
    });

  }, []);

  console.log(item)*/

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); sendOrder() }}>
        <input name='name' type="text" onChange={handleOnChange} />
        <input name='phone' type="text" onChange={handleOnChange} />
        <input name='email' type="text" onChange={handleOnChange} />
        <button>Enviar</button>
      </form>
      {checkoutCode}
    </div>
  );

}

export default CheckOutForm