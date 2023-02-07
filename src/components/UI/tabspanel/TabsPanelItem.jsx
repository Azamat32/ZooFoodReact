import React from "react";
import pink from "../../assets/pink.png";
import purple from "../../assets/purple.png";
import green from "../../assets/green.png";
import './TabsPanelItem.scss'
function TabsPanelItem(props) {
  return (
    <div className="tab_panel_inner">
      <div className="tab_panel_blob purple">
        <div className="tab_panel_blob_inner">
          <img src={purple} alt="" />
          <div className="tab_panel_blob_inner_word">
            <span>48 кг</span> <p>финиш {">"} 29 дней</p>
          </div>
        </div>
      </div>
      <div className="tab_panel_blob green">
        <div className="tab_panel_blob_inner">
          <img src={green} alt="" />
          <div className="tab_panel_blob_inner_word">
            <span>32 кг</span> <p>рост 15-28 дней</p>
          </div>
        </div>
      </div>
      <div className="tab_panel_blob pink">
        <div className="tab_panel_blob_inner">
          {" "}
          <img src={pink} alt="" />
          <div className="tab_panel_blob_inner_word">
            <span>12 кг</span> <p>старат 0-14 дней</p>
          </div>
        </div>
      </div>
      <img className="animal" src={props.animalImg} alt="" />
    </div>
  );
}

export default TabsPanelItem;
