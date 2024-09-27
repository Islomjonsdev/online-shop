import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Icons } from "../../../../../SvgIcons";
import style from "./HeaderBottomList.module.scss";

const HeaderBottomList = () => {
  const [likes, setlikes] = useState(
    JSON.parse(localStorage.getItem("likedCards") || "[]")
  );
  const { t } = useTranslation();
  return (
    <div className={style.header_bottom_list}>
      <Link to={"/compare"}>
        <Icons.compare /> {t("compare")}
      </Link>
      <Link to={"/like"}>
        <Icons.heart /> {t("like")}
        <span>{likes?.length}</span>
      </Link>
      <Link to={"/cart"}>
        <Icons.cart /> {t("cart")}
      </Link>
      <Link to={"/login"}>
        <Icons.profile /> {t("login")}
      </Link>
    </div>
  );
};

export default HeaderBottomList;
