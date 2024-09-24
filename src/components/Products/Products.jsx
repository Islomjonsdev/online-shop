import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { productsData } from "../../Api/ProductsApi";
import { Icons } from "../../SvgIcons";
import style from "./Products.module.scss";
import { useEffect } from "react";

const Products = () => {
  const { t } = useTranslation();
  const [likedCards, setLikedCards] = useState([]);
  const handleLikedCards = (_id) => {
    let cache = likedCards.find((el) => el === _id);
    if (cache) {
      setLikedCards(likedCards.filter((el) => el !== _id));
    } else {
      setLikedCards([...likedCards, _id]);
    }
  };

  useEffect(() => {
    const storedLikes = localStorage.getItem("likedCards");
    if (storedLikes) {
      setLikedCards(JSON.parse(storedLikes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likedCards", JSON.stringify(likedCards));
  }, [likedCards]);
  return (
    <section className={style.products}>
      <div className={style.container}>
        <div className={style.profucts_top}>
          <h3>{t("bestSellers")}</h3>
          <span>{t("allProducts")}</span>
        </div>

        <ul className={style.products_list}>
          {productsData?.map((card) => {
            const { id, image, price, notPrice, star, starText, cardTitle } =
              card;
            return (
              <li key={id}>
                <img className={style.card_image} src={image} alt="" />
                <div className={style.products_btn}>
                  <button onClick={() => handleLikedCards(id)}>
                    {!likedCards?.includes(id) ? (
                      <Icons.likeIcon />
                    ) : (
                      <Icons.hearIcons />
                    )}
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
                    <button>
                      <Icons.cartIcon />
                    </button>
                  </div>
                  <div className={style.products_star_wrapper}>
                    <img src={star} alt="" />
                    <p>{starText}</p>
                  </div>
                  <h4>{cardTitle}</h4>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Products;
