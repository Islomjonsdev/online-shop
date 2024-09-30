import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import cartImage from "../../assets/images/cart.png";
import style from "./Cart.module.scss";

const Cart = () => {
  const accept = useSelector((state) => state);

  useEffect(() => {
    
  }, [])
  return (
    <div className={style.cart}>
      <div className={style.container}>
        <div className={style.cart_top}>
          {accept?.joinedCart?.cart?.length > 0 ? (
            <h1>Savat</h1>
          ) : (
            <div>
              <img src={cartImage} alt="cartImage" />
              <h1>Корзина пуста</h1>
              <Link to={"/"}>На главную</Link>
            </div>
          )}
        </div>
        {accept?.joinedCart?.cart?.map((item, id) => (
          <div key={id}>
            <img src={item?.image} alt="" />
            <p>{item?.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
