import React from 'react'
import './slider.scss'
import arrow_right from '../../assets/arrow_right.svg'

function Slider(props) {
  return (
    <div>
        <div className="swiper_slide_content">
            <div className="swiper_slide_content_left">
                <div className="silde_left_img">
                    <img className='animate_bg' src={props.animalBg} alt="" />
                    <img className='animal' src={props.animalImg} alt="" />
                    <img className='food' src={props.foodImg} alt="" />

                </div>
                <div className="slide_left_words">
                    <div className="slide_left_words_inner">
                    <img className='slide_left_words_bg' src={props.wordsBg} alt="" />
                    <h1>Karotin+ <br /> <span>содержит  каротиноды</span> </h1>
                    </div>
                    
                </div>
            </div>
            <div className="swiper_slide_content_right">
                <div className="swiper_slide_content_right_inner">
                    <div className="slide_content_right_title">
                        <h1>{props.title}</h1>
                      
                    </div>
                    <div className="slide_content_right_txt">
                    <p>{props.description} <br /> <br /> {props.description2}</p>
                    </div>
                    <div className="slide_content_right_btn">
                        <a className='btn_buy' href="#">Расчитать</a>
                        <button onClick={props.toggleModal} >Подробнее о продукте <img src={arrow_right} alt="" /> </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Slider