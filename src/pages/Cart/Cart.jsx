import React from 'react'
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const accept = useSelector((state) => state);
  console.log(accept);
  return (
    <div>Cart</div>
  )
}

export default Cart