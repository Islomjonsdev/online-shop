import React from 'react'
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const accept = useSelector((state) => state);
  console.log(accept);
  return (
    <div>
      {accept?.joinedCart?.cart?.map((item) => (
       <div>
          <img src={item?.image} alt="" />
          <p>{item?.price}</p>
       </div>
      ))}
    </div>
  )
}

export default Cart