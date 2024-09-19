import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../../SvgIcons";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import style from "./Header.module.scss";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import { useTranslation } from "react-i18next";
import i18n from "../../../locales/i18next";

const Header = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const [changeLang, setChangeLang] = useState("uz");
  console.log(changeLang);
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Change the language
    setChangeLang(lang); // Update the local state
    setIsActive(false); // Close the dropdown
  };
  return (
    <header className={style.header}>
      <div className={style.header_blog}>
        <div className={style.container}>
          <div className={style.header_container}>
            <div className={style.header_left}>
              <Link to={"/"}>
                <Icons.location />
                {t("city")}: <span>{t("tashkent")}</span>
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
                <div
                  className={style.header_lang_wrapper}
                  onClick={(e) => setIsActive(!isActive)}
                >
                  <p>Uz</p>
                  {isActive === false ? (
                    <IoIosArrowDown className={style.svg_icon} />
                  ) : (
                    <IoIosArrowUp className={style.svg_icon} />
                  )}
                </div>
                {isActive && (
                  <div className={style.header_drop_down}>
                    <div
                      className={style.header_drop_down_item}
                      onClick={() => handleChangeLanguage("uz")}
                    >
                      Uz
                    </div>
                    <div
                      className={style.header_drop_down_item}
                      onClick={() => handleChangeLanguage("ru")}
                    >
                      Ru
                    </div>
                    <div
                      className={style.header_drop_down_item}
                      onClick={() => handleChangeLanguage("en")}
                    >
                      En
                    </div>
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
