import React from 'react';
import style from "./Cards.module.scss"

const Cards = () => {
  return (
    <section className={style.cards}>
        <div className={style.container}>
            <div className={style.cards_top}>
                Cards top
            </div>
        </div>
    </section>
  )
}

export default Cards