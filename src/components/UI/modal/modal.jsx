import React from "react";
import { useState } from "react";
import './modal.scss'
import close from '../../assets/close-btn.svg'
function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="modal">
      <div className="modal_wrap">
      <div className="modal_inner">
        <span onClick={props.toggleModal} className="close"><img src={close}alt="" /></span>
        <div className="modal_header">
          <p className="modal_header_title">показатели <br /> питательности</p>
          <p className="modal_header_list">ед. изм.</p>

          <p className="modal_header_list">престарт 0-7 дней</p>
          <p className="modal_header_list">старт 0-14 дней</p>
          <p className="modal_header_list">рост 15-28 дней</p>
          <p className="modal_header_list">финиш 29-24 дня</p>
          <p className="modal_header_list">финиш 29-42 дня с краси-телем</p>
        </div>
        <div className="modal_list_grid">
        <div className="modal_list">
          <p className="modal_list_item_title">обменная энерния</p>
          <p className="modal_list_item">ккал</p>
          <p className="modal_list_item">297</p>
          <p className="modal_list_item">300</p>
          <p className="modal_list_item">308</p>
          <p className="modal_list_item">318</p>
          <p className="modal_list_item">318</p>
        </div>
        <div className="modal_list">
          <p className="modal_list_item_title">сырой протеин + фитаза</p>
          <p className="modal_list_item">%</p>
          <p className="modal_list_item">297</p>
          <p className="modal_list_item">300</p>
          <p className="modal_list_item">308</p>
          <p className="modal_list_item">318</p>
          <p className="modal_list_item">318</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
