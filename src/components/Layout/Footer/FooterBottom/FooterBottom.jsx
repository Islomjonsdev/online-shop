import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../../../SvgIcons";
import style from "./FooterBottom.module.scss";

const FooterBottom = () => {
  return (
    <div className={style.footer_bottom}>
      <div className={style.footer_bottom_left}>
        <div>
          <Link>
            <Icons.instagram className={style.instagram} />
          </Link>
          <Link>
            <Icons.telegram className={style.telegram} />
          </Link>
          <Link>
            <Icons.facebook className={style.facebook} />
          </Link>
        </div>
        <p>© 2022 ООО «Интернет магазин «Get it».</p>
      </div>

      <div className={style.footer_bottom_right}>
        <p>Мобильное приложение:</p>
        <Link to={"/"}>
          <Icons.apple className={style.apple}/>
        </Link>
        <Link to={"/"}>
          <Icons.android className={style.android}/>
        </Link>
      </div>
    </div>
  );
};

export default FooterBottom;
