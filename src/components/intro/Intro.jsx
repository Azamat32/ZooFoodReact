import React from "react";
import './Intro.scss';
function Intro() {
  return (
    <div className="intro">
     
      <div className="intro_content">
        <div className="intro_content_title">
          <h1>Мегакорм — залог здоровья животных </h1>
        </div>
        <div className="intro_content_word">
          <p>
            Высококачественный сбалансированный комбикорм, содержащий суточную
            потребность в питательных веществах, обеспечивает здоровье животных
            и птиц, повышает эффективность хозяйства.
          </p>
        </div>
        <div className="intro_content_btn">
            <button className="btn_buy" href="#">Где купить</button>
            <button className="calculator" href="#">Калькулятор </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
