import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext";
import IconButton from '@mui/material/IconButton';


export default function CartWidget() {

  const { totalCart } = useContext(CartContext);

  return (
    <>
      <Link to="../cart" style={{textDecoration:"none"}}>
        <IconButton>
          <ShoppingCartIcon />{totalCart > 0 ? totalCart : null}
        </IconButton>
      </Link>
    </>
  );
}
