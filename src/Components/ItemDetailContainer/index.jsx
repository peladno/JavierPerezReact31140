import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/index.jsx";
import { useParams } from "react-router-dom";
import styles from "./itemDetailContainer.module.css";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

//Componente de llamada de producto especifico por id
const ItemDetailContainer = () => {
 
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false)
  const { id } = useParams()


  //llamada a producto segun cambia el id
  useEffect(() => {
    const dataBase = getFirestore();

    const products = doc(dataBase, 'oilCanvas', id);

    getDoc(products)
    .then((res) => {
      setItem({ id: res.id, ...res.data() });
      setLoading(true);
      }
    ).catch((err) => {
      console.log("error: ", err);
    });

  }, [id]);
  
  return (
    <div className={styles.itemContainer}> 
      <ItemDetail item ={item} loading={loading}/>
    </div>
  )
}

export default ItemDetailContainer;