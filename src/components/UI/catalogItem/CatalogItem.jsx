import React from "react";
import './CatalogItem.scss'
import PropTypes from 'prop-types';

function CatalogItem(props) {
    
  return (
    <div className="catalog_item">
      <div className="catalog_item_avatar">
        <img src={props.animImg} alt="" />
      </div>
      <div className="catalog_item_title">
        <h1>{props.catalogTitle}</h1>
      </div>
      <div className="catalog_item_word">
        <p>
          {props.catalogWords}
        </p>
      </div>
        <div className="catalog_link"> <img src={props.linkIcon} alt="" />
           <a href="#">{props.linkWords} <img src={props.arrow} alt="" />  </a> </div>
    </div>
  );
}
CatalogItem.propTypes = {
    linkWords: PropTypes.string,
    linkIcon:PropTypes.string,
    arrow:PropTypes.string,
};
export default CatalogItem;
