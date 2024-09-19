import React from "react";
import img1 from "../../assets/images/image1.png";
import img2 from "../../assets/images/image2.png";
import img3 from "../../assets/images/image3.png";
import img4 from "../../assets/images/image4.png";
import img5 from "../../assets/images/image5.png";
import img6 from "../../assets/images/image6.png";
import img7 from "../../assets/images/image7.png";
import img8 from "../../assets/images/image8.png";
import img9 from "../../assets/images/image9.png";
import img10 from "../../assets/images/image10.png";
import img11 from "../../assets/images/image11.png";


import style from "./Category.module.scss";
import { Link } from "react-router-dom";

const Category = () => {
  const categoryData = [
    {
      id: 1,
      image: img1,
      number: "1248 dona",
      title: "Электроинструменты",
    },
    {
      id: 2,
      image: img2,
      number: "1248 dona",
      title: "Все для сада",
    },
    {
      id: 3,
      image: img3,
      number: "1248 dona",
      title: "Бытовая техника",
    },
    {
      id: 4,
      image: img4,
      number: "1248 dona",
      title: "Водяные насосы",
    },
    {
      id: 5,
      image: img5,
      number: "1248 dona",
      title: "Электрика и свет",
    },
    {
      id: 6,
      image: img6,
      number: "1248 dona",
      title: "Низковольтное оборудование",
    },
    {
      id: 7,
      image: img7,
      number: "1248 dona",
      title: "Кабель и провода",
    },
    {
      id: 8,
      image: img8,
      number: "1248 dona",
      title: "Сварочные аппараты",
    },
    {
      id: 9,
      image: img9,
      number: "1248 dona",
      title: "Электроника",
    },
    {
        id: 10,
        image: img10,
        number: "1248 dona",
        title: "Сварочные аппараты",
      },
      {
        id: 11,
        image: img11,
        number: "1248 dona",
        title: "Электроника",
      },
  ];
  return (
    <section className={style.category}>
      <div className={style.container}>
        <div className={style.category_top}>
          <h4>Ommabop kategoriyalar</h4>
        </div>
        <div className={style.category_list}>
          {categoryData?.map((category) => {
            const { id, image, number, title } = category;
            return (
              <Link to={`/category/${id}`} key={id}>
                <div className={style.category_img}>
                  <img src={image} alt="image" />
                </div>
                <div className={style.category_body}>
                  <span>{number}</span>
                  <p>{title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
