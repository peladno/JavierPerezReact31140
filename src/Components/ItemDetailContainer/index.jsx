import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/index.jsx";
import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const ItemDetailContainer = () => {
 
  const [item, setItem] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    const db = getFirestore();

    const products = doc(db, 'oilCanvas', id);

    getDoc(products)
    .then((res) => {
      setItem({ id: res.id, ...res.data() });
    }).catch((err) => {
      console.log("error: ", err);
    });

  }, [id]);
  
  return (
    <div className={styles.itemContainer}> 
      <ItemDetail item ={item}/>
    </div>
  )
}

export default ItemDetailContainer;