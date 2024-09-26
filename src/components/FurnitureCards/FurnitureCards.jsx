import React from "react";
import { Icons } from "../../SvgIcons";
import style from "./FurnitureCards.module.scss";

const FurnitureCards = ({ cards }) => {
  const { id, furnitureTitle, furnitureText, furnitureImage } = cards;
  console.log(cards);
  return (
    <div className={style.furniture_cards}>
      <div className={style.furniture_cards_left}>
        <h4>{furnitureTitle}</h4>
        <p>{furnitureText}</p>
        <button>
          <Icons.nextIcon />
        </button>
      </div>
      <img src={furnitureImage} alt="" />
    </div>
  );
};

export default FurnitureCards;
