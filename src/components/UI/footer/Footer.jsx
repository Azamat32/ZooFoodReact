import React from "react";
import "./Footer.scss";
import arrowRight from '../../assets/arrow_right.svg';
import vk from "../../assets/vk.svg"
import telegram from "../../assets/telegram.svg"
import mail from "../../assets/mail.svg"
import tic from "../../assets/tic.svg"
function Footer() {
  return (
    <div className="footer">
      <div className="footer_inner">
        <div className="footer_rights">
            <h2>OOO «Мегамикс Комбикорм»</h2>
            <span>© 2010—2021</span>
        </div>
        <div className="footer_words">
            <p>согласие на обработку <br /> персональных данных <img src={arrowRight} alt="" /></p>
        </div>
        <div className="footer_links">
            <a href="#" className="pink" >
                <img src={mail} alt="" />
            </a>
            <a href="#"className="blue" >
                <img src={telegram} alt="" />
            </a>
            <a href="#" className="black">
                <img src={vk} alt="" />
            </a>
            <a href="#" className="purple">
                <img src={tic} alt="" />
            </a>
        </div>

      </div>
    </div>
  );
}

export default Footer;
