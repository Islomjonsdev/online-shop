import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../../SvgIcons";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import style from "./Header.module.scss";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
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
              <div className={style.header_lang}>
                <div className={style.header_lang_wrapper} onClick={(e) => setIsActive(!isActive)}>
                  <p>Uz</p>
                  {isActive === false ? <IoIosArrowDown className={style.svg_icon}/> : <IoIosArrowUp className={style.svg_icon}/>}
                </div>
                {isActive && (
                  <div className={style.header_drop_down}>
                    <div className={style.header_drop_down_item}>Uz</div>
                    <div className={style.header_drop_down_item}>Ru</div>
                    <div className={style.header_drop_down_item}>En</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeaderBottom />
    </header>
  );
};

export default Header;
