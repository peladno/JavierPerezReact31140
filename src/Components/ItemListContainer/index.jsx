import React, { useState, useEffect } from "react"; 
import ItemList from "../ItemList/index.jsx";
import { useParams } from "react-router-dom";
import styles  from "./index.module.css";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Waveform } from "@uiball/loaders";


const ItemListContainer = () => {
  const [item, setItem] = useState ([]);
  const [loading, setLoading] = useState(false);

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
        setLoading(true);
      }).catch((err) => {
        console.log("error: ", err);
      });

  }, [category]);

  return (
      <div className={styles.itemListContainer}>
        {!loading ?
        <div className={styles.loadingContainer}>
          <Waveform className={styles.loading}
          size={80}
          lineWeight={3.5}
          speed={1} 
          color="black" /> 
        </div> :
        <div className={styles.items}>
          <ItemList products={item} loading={loading} />
        </div>}
      </div>
  );

  
}

export default ItemListContainer
