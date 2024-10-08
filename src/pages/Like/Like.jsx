import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import likeImage from "../../assets/images/like.png";
import style from "./Like.module.scss";

const Like = () => {
  const [likes, setLikes] = useState([]);
  const likeProduct = useSelector((state) => state);

  useEffect(() => {
    const getToLocalStorage = localStorage.getItem("like");
    if (getToLocalStorage) {
      setLikes(JSON.parse(getToLocalStorage));
    }
  }, []);

  useEffect(() => {
    if (
      likeProduct?.likeCart?.likeCart &&
      likeProduct.likeCart.likeCart.length > 0
    ) {
      setLikes(likeProduct.likeCart.likeCart);
      localStorage.setItem(
        "like",
        JSON.stringify(likeProduct.likeCart.likeCart)
      );
    }
  }, [likeProduct]);
  return (
    <div className={style.like}>
      <div className={style.container}>
        <div className={style.like_top}>
          {likes.length > 0 ? (
            <h1>Like</h1>
          ) : (
            <>
              <div>
                <img src={likeImage} alt="" />
                <h1>Sizga yoqqanini qoʻshing</h1>
                <Link to={"/"}>Akkauntga kirish</Link>
              </div>
            </>
          )}
        </div>
        {likes.map((likes, id) => (
          <div key={id}>
            <img src={likes?.image} alt="" />
            <p>{likes?.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Like;
