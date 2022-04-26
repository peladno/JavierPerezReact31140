import React from "react";
import NavBar from "./Components/NavBar/index.jsx";
import ItemListContainer from "./Components/ItemListContainer/index.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/index.jsx"
import CartDetail from "./Components/CartDetail/index.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./Components/CartContext.jsx";

export default function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element= {<ItemListContainer />} />
          <Route exact path="/category/:category" element= {<ItemListContainer />} />
          <Route exact path="/item/:id" element= {<ItemDetailContainer />} />
          <Route exact path="/cart" element= {<CartDetail />} />
        </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

