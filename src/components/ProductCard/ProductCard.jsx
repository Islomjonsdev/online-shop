import React, { useEffect, useState } from "react";
import { Icons } from "../../SvgIcons";
import { useDispatch } from "react-redux";
import style from "./ProductCard.module.scss";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const { id, image, price, notPrice, star, starText, cardTitle, discount } =
    data;
  const [likedCards, setLikedCards] = useState(() => {
    const storedLikes = localStorage.getItem("likedCards");
    return storedLikes ? JSON.parse(storedLikes) : [];
  });

  const dispatchProducts = (data) => {
    const action = {
      type: "add_to_cart",
      data: data,
    };
    dispatch(action);
  };

  useEffect(() => {
    localStorage.setItem("likedCards", JSON.stringify(likedCards));
  }, [likedCards]);

  const handleLikedCards = (_id, data) => {
    let cache = likedCards.find((el) => el === _id);
    if (cache) {
      setLikedCards(likedCards.filter((el) => el !== _id));
    } else {
      setLikedCards([...likedCards, _id]);
    }

    const action = {
      type: "add_to_like",
      data: data,
    };
    dispatch(action);
  };

  return (
    <div className={style.wrapper} key={id}>
      <img className={style.card_image} src={image} alt="" />
      {discount ? (
        <div className={style.discount}>
          <p>скидки</p>
          <span>-{discount}%</span>
        </div>
      ) : (
        <></>
      )}
      <div className={style.products_btn}>
        <button onClick={() => handleLikedCards(id, data)}>
          {!likedCards?.includes(id) ? <Icons.likeIcon /> : <Icons.hearIcons />}
        </button>
        <button className={style.exchange}>
          <Icons.exchange />
        </button>
      </div>
      <div className={style.products_list_item}>
        <div className={style.products_list_top}>
          <div className={style.products_list_top_item}>
            <span>{price}</span>
            <del>{notPrice}</del>
          </div>
          <button
            onClick={() =>
              dispatchProducts({
                id,
                image,
                price,
                notPrice,
                star,
                starText,
                cardTitle,
                discount,
              })
            }
          >
            <Icons.cartIcon />
          </button>
        </div>
        <div className={style.products_star_wrapper}>
          <img src={star} alt="" />
          <p>{starText}</p>
        </div>
        <h4>{cardTitle}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
