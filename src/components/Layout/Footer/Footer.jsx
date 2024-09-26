import React from "react";
import { Link } from "react-router-dom";
import scannerImg from "../../../assets/svg/scan.svg";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footer_container}>
          <ul className={style.footer_top}>
            <li className={style.footer_top_item}>
              <h3>Информация</h3>

              <ul className={style.footer_top_list}>
                <li className={style.footer_top_item}>
                  <Link to={"/"}>О компании</Link>
                </li>
                <li className={style.footer_top_item}>
                  <Link to={"/"}>Наши партнеры</Link>
                </li>
                <li className={style.footer_top_item}>
                  <Link to={"/"}>Блог</Link>
                </li>
                <li className={style.footer_top_item}>
                  <Link to={"/"}>О наших акциях и скидках</Link>
                </li>
                <li className={style.footer_top_item}>
                  <Link to={"/"}>Пользовательское соглашение</Link>
                </li>
              </ul>
            </li>
            <li className={style.footer_top_item}>
              <h3>Поддержка и сервис</h3>
              <ul className={style.footer_top_list}>
                <li className={style.footer_top_item}>
                  <Link to={"/"}>Вопросы и ответы</Link>
                </li>
                <li className={style.footer_top_item}>
                  <Link to={"/"}>Отзывы</Link>
                </li>
                <li className={style.footer_top_item}>
                  <Link to={"/"}>Контакты</Link>
                </li>
                <li className={style.footer_top_item}>
                  <Link to={"/"}>Для партнеров</Link>
                </li>
              </ul>
            </li>
            <li className={style.footer_top_item}>
              <h3>Каталог товаров</h3>
              <ul className={style.footer_top_list}>
                <li className={style.footer_top_item}>
                  <Link to={"/"}>Кирпичи и блоки</Link>
                </li>
                <li className={style.footer_top_item}>
                  <Link to={"/"}>Цемент и сухие смеси</Link>
                </li>
                <li className={style.footer_top_item}>
                  <Link to={"/"}>Изоляционные материалы</Link>
                </li>
                <li className={style.footer_top_item}>
                  <Link to={"/"}>Сантехника</Link>
                </li>
              </ul>
            </li>
            <li className={style.footer_top_item}>
              <h3>Контакты</h3>
              <ul className={style.footer_top_list}>
                <li className={style.footer_top_item}>
                  <Link to={"/"}>Телефон: +998 (71) 200-7-002</Link>
                </li>
                <li className={style.footer_top_item}>
                  <Link to={"/"}>Ташкент, ул. Коратош, 106</Link>
                </li>
                <li className={style.footer_top_item}>
                  <div>
                    <img src={scannerImg} alt="" />
                    <p>Наведите камеру на QR-код, чтобы найти местоположение</p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
