import React from "react";
import { useTranslation } from "react-i18next";
import { productsData } from "../../Api/ProductsApi";
import ProductCard from "../ProductCard/ProductCard";
import style from "./DiscountProducts.module.scss";

const DiscountProducts = () => {
  const { t } = useTranslation();
  return (
    <section className={style.discount_products}>
      <div className={style.container}>
        <div className={style.discount_products_top}>
          <h3>{t("bestSellers")}</h3>
          <span>{t("allProducts")}</span>
        </div>

        <div className={style.discount_products_list}>
          {productsData
            ?.filter((el) => el.discount)
            .map((el) => (
              <ProductCard data={el} key={el?.id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountProducts;
