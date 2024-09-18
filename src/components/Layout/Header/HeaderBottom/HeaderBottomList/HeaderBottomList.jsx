import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../../../../SvgIcons";
import style from "./HeaderBottomList.module.scss";

const HeaderBottomList = () => {
  return (
    <div className={style.header_bottom_list}>
      <Link to={"/compare"}>
        <Icons.compare /> Сравнение
      </Link>
      <Link to={"/like"}>
        <Icons.heart /> Избранное
      </Link>
      <Link to={"/cart"}>
        <Icons.cart /> Корзина
      </Link>
      <Link to={"/login"}>
        <Icons.profile /> Войти
      </Link>
    </div>
  );
};

export default HeaderBottomList;
