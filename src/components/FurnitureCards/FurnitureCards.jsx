import React from "react";
import { Icons } from "../../SvgIcons";
import style from "./FurnitureCards.module.scss";

const FurnitureCards = ({ cards }) => {
  const { id, furnitureTitle, furnitureText, furnitureImage } = cards;
  return (
    <div className={style.furniture_cards}>
      <h4>{furnitureTitle}</h4>
      <p>{furnitureText}</p>
      <div className={style.furniture_cards_bottom}>
        <button>
          <Icons.nextIcon />
        </button>
        <img src={furnitureImage} alt="" />
      </div>
    </div>
  );
};

export default FurnitureCards;
