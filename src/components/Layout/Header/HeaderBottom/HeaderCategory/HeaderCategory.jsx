import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../../../../SvgIcons";
import style from "./HeaderCategory.module.scss";

const HeaderCategory = () => {
  const categoryList = [
    {
      id: 1,
      categoryImg: <Icons.categoryImg1 />,
      categoryText: "Подарки",
    },
    {
      id: 2,
      categoryImg: <Icons.categoryImg2 />,
      categoryText: "Мебель",
    },
    {
      id: 3,
      categoryImg: <Icons.categoryImg3 />,
      categoryText: "Техника",
    },
    {
      id: 4,
      categoryImg: <Icons.categoryImg4 />,
      categoryText: "Текстиль",
    },
    {
      id: 5,
      categoryImg: <Icons.categoryImg5 />,
      categoryText: "Посуда",
    },
    {
      id: 6,
      categoryImg: <Icons.categoryImg6 />,
      categoryText: "Сантехника",
    },
    {
      id: 7,
      categoryImg: <Icons.categoryImg7 />,
      categoryText: "Стройматириалы",
    },
    {
      id: 8,
      categoryImg: <Icons.categoryImg8 />,
      categoryText: "Канцтовары",
    },
    {
      id: 9,
      categoryImg: <Icons.categoryImg9 />,
      categoryText: "Акции",
    },
  ];
  return (
    <div className={style.header_category}>
      <div className={style.container}>
        <div className={style.header_category_blog}>
          {categoryList?.map((item, index) => {
            const { id, categoryImg, categoryText } = item;
            return (
              <Link key={index}>
                {categoryImg} {categoryText}
              </Link>
            );
          })}
          <select name="" id="">
            <option value="">Ещё</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderCategory;
