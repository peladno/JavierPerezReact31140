import React from "react";
import NavBar from "./Components/NavBar/index.jsx";
import ItemListContainer from "./Components/ItemListContainer/index.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/index.jsx"

export default function App() {

  return (
    <>
      <NavBar/>
      <ItemDetailContainer/>
      <ItemListContainer/>
    </>
  );
}

