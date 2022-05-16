import React from "react";
import NavBar from "./Components/NavBar/index.jsx";
import ItemListContainer from "./Components/ItemListContainer/index.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/index.jsx"
import CartDetail from "./Components/CartDetail/index.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./Components/CartContext.jsx";
import CheckOutForm from "./Components/CheckOutForm/index.jsx";
import Footer from "./Components/Footer/index.jsx";
import Error404 from "./Components/Error404/index.jsx"

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
          <Route exact path="/checkOut" element= {<CheckOutForm />} />
          <Route exact path="/*" element= {<Error404 />} />
        </Routes>
        <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

