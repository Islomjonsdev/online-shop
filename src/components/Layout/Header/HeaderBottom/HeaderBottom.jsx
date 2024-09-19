import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import headerLogo from "../../../../assets/svg/headerLogo.svg";
import { Icons } from "../../../../SvgIcons";
import Button from "../../../Button/Button";
import style from "./HeaderBottom.module.scss";
import HeaderBottomList from "./HeaderBottomList/HeaderBottomList";
import HeaderCategory from "./HeaderCategory/HeaderCategory";

const HeaderBottom = () => {
  const { t } = useTranslation();
  return (
    <div className={style.header_bottom}>
      <div className={style.header_bottom_blog}>
        <div className={style.container}>
          <div className={style.header_bottom_container}>
            <Link to={"/"}>
              <img src={headerLogo} alt="" />
            </Link>

            <div className={style.header_bottom_list}>
              <Button title={t("catalog")} />
              <form>
                <input type="text" placeholder={t("search")} />
                <button>
                  <Icons.search />
                </button>
              </form>
              
            </div>

            <HeaderBottomList />
          </div>
        </div>
      </div>
      <HeaderCategory />
    </div>
  );
};

export default HeaderBottom;
