import React from "react";
import "./Footer.scss";
import arrowRight from '../../assets/arrow_right.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_inner">
        <div className="footer_rights">
            <h2>OOO «Мегамикс Комбикорм»</h2>
            <span>© 2010—2021</span>
        </div>
        <div className="footer_words">
            <p>согласие на обработку персоналных данных <img src={arrowRight} alt="" /></p>
        </div>
        <div className="footer_links">
            <a href="#"></a>
        </div>

      </div>
    </div>
  );
}

export default Footer;
