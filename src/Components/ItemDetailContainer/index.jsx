import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/index.jsx";
import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const ItemDetailContainer = () => {
 
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

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