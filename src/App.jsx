import React from "react";
import NavBar from "./Components/NavBar/index.jsx";
import ItemListContainer from "./Components/ItemListContainer/index.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
        </Routes>
        {/*<ItemListContainer/>*/}
      </BrowserRouter>
    </>
  );
}

