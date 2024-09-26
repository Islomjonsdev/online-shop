import React from 'react';
import { furnitureData } from '../../Api/Furniture';
import FurnitureCards from '../FurnitureCards/FurnitureCards';
import style from "./Furniture.module.scss"

const Furniture = () => {
  return (
    <section className={style.furniture}>
        <div className={style.container}>
            <div className={style.furniture_list}>
                {furnitureData?.map((cards) => (
                    <FurnitureCards cards={cards} key={cards?.id}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Furniture