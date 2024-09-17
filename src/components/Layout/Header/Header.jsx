import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../../SvgIcons";
import style from "./Header.module.scss";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header_blog}>
        <div className={style.container}>
          <div className={style.header_container}>
            <div className={style.header_left}>
              <Link to={"/"}>
                <Icons.location />
                Город: <span>Ташкент</span>
              </Link>
            </div>

            <div className={style.header_right}>
              <Link className={style.header_right_item}>
                <Icons.instagram />
                home24.uz
              </Link>
              <Link className={style.header_right_item}>
                <Icons.telegram />
                home24.uz
              </Link>
              <Link to={"tel:+998 71 200 7 002"}>+998 71 200 7 002</Link>
              <select name="" id="">
                <option value="uz">uz</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <HeaderBottom />
    </header>
  );
};

export default Header;
