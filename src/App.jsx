import React from "react";
import NavBar from "./Components/NavBar/Index.jsx"
import Counter from "./Components/Counter.jsx"
import ItemListContainer from "./Components/ItemListContainer/index.jsx";

export default function App() {

  return (
    <>
      <NavBar/>
      <Counter/>
      <ItemListContainer/>

    </>
  );
}

