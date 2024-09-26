import React from "react";
import brandImage1 from "../../assets/images/brand1.png";
import brandImage2 from "../../assets/images/brand2.png";
import brandImage3 from "../../assets/images/brand3.png";
import brandImage4 from "../../assets/images/brand4.png";
import brandImage5 from "../../assets/images/brand5.png";
import brandImage6 from "../../assets/images/brand6.png";
import brandImage7 from "../../assets/images/brand7.png";
import brandImage8 from "../../assets/images/brand8.png";

import style from "./Brands.module.scss";

const Brands = () => {
  return (
    <section className={style.brands}>
      <div className={style.container}>
          <h3>Бренды</h3>
        <ul className={style.brands_container}>
          <li>
            <img src={brandImage1} alt="" />
          </li>
          <li>
            <img src={brandImage2} alt="" />
          </li>
          <li>
            <img src={brandImage3} alt="" />
          </li>
          <li>
            <img src={brandImage4} alt="" />
          </li>
          <li>
            <img src={brandImage5} alt="" />
          </li>
          <li>
            <img src={brandImage6} alt="" />
          </li>
          <li>
            <img src={brandImage7} alt="" />
          </li>
          <li>
            <img src={brandImage8} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
