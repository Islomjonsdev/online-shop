import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartImage from "../../assets/images/cart.png";
import style from "./Cart.module.scss";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const accept = useSelector((state) => state);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (accept?.joinedCart?.cart && accept.joinedCart.cart.length > 0) {
      setCartItems(accept.joinedCart.cart);
      localStorage.setItem("cart", JSON.stringify(accept.joinedCart.cart));
    }
  }, [accept]);

  return (
    <div className={style.cart}>
      <div className={style.container}>
        <div className={style.cart_top}>
          {cartItems.length > 0 ? (
            <h1>Savat</h1>
          ) : (
            <div>
              <img src={cartImage} alt="cartImage" />
              <h1>Корзина пуста</h1>
              <Link to={"/"}>На главную</Link>
            </div>
          )}
        </div>
        {cartItems.map((item, id) => (
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
