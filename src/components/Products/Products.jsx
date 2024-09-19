import React from "react";
import { useTranslation } from "react-i18next";
import style from "./Products.module.scss";

const Products = () => {
  const { t } = useTranslation();
  return (
    <section className={style.products}>
      <div className={style.container}>
        <div className={style.profucts_top}>
          <h3>{t("bestSellers")}</h3>
          <span>{t("allProducts")}</span>
        </div>
      </div>
    </section>
  );
};

export default Products;
