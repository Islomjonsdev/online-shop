import React from "react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { Icons } from "../../SvgIcons";
import chairImg from "../../assets/images/chair.png"
import style from "./Hero.module.scss";

const Hero = () => {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike((prev) => !prev);
  };
  return (
    <section className={style.hero}>
      <div className={style.container}>
        <div className={style.hero_container}>
          <div className={style.hero_blog}>
            <button className={style.hero_btn} data-btn-type="left">
              <FaArrowLeft />
            </button>
            <div className={style.hero_left}>
              <h3>Самый мягкий диваны</h3>
              <p>Сейфы и металлические шкафы</p>
              <span>ПРОМЕТ</span>
            </div>
            <button className={style.hero_btn} data-btn-type="right">
              <FaArrowRight />
            </button>
          </div>

          <div className={style.hero_right}>
            <div className={style.hero_right_top}>
              <h3>товар дня</h3>
              <button onClick={handleLike}>
                {like === false ? <Icons.likeIcon /> : <FcLike />}
              </button>
            </div>
            <div className={style.hero_right_bottom}>
              <img src={chairImg} alt="" />

              <div className={style.hero_right_bottom_list}>
                  <div>
                    <p className={style.text1}>Cкидка</p>
                    <span>-90%</span>
                  </div>
                  <p className={style.text2}>Нет отзывов</p>
                  <span>Realme Pad Mini 32GB + 3GB LTE (синий)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
