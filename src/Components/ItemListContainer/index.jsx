import React, { useState, useEffect } from "react"; 
import ItemList from "../ItemList/index.jsx";
import { useParams } from "react-router-dom";
import styles  from "./index.module.css";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const [item, setItem] = useState ([]);

  const {category} = useParams ();

  useEffect(() => {
    const db = getFirestore();

    let productsCategory;

    !category ? 
    productsCategory = (collection(db, 'oilCanvas')) : 
    productsCategory = query(collection(db, 'oilCanvas'), where('category', '==', category));
    

    getDocs(productsCategory)
    .then((res) => {
        setItem(res.docs.map((item) => ({ id: item.id, ...item.data() })));
      }).catch((err) => {
        console.log("error: ", err);
      });

  }, [category]);

  return (
      <div className={styles.itemListContainer}>
        <div className={styles.cosas}>
          <ItemList products={item}/>
        </div>
      </div>
  );

  
}

export default ItemListContainer
