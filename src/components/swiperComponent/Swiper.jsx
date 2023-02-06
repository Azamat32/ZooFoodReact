import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Slider from "../UI/slider/slider";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "./Swiper.scss";
import Modal from "../UI/modal/modal";
import whiteChick from "../assets/whiteChiken.png";
import food from "../assets/korm.png";
import animate_bg from "../assets/goose_bg.svg";
import slide_bg from "../assets/slide_bg.svg";
function SwiperComponent(props) {
  return (
    <div className="swiper_wrapper">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Slider
            toggleModal={props.toggleModal}

            animalBg={animate_bg}
            animalImg={whiteChick}
            foodImg={food}
            wordsBg={slide_bg}
            title="Комбикорм для бройлеров"
            description="Изготовлен из отборных зерновых продуктов с высокими показателями питательности.  Содержит фитобиотики для повышения иммунитета и ферменты для пищеварения."
            description2="«Мегакорм» обеспечивает высокую продуктивность птиц и темпы роста, так как содержит весь необходимый комплекс витаминов и микроэлементов, оптимальный для бройлеров."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            toggleModal={props.toggleModal}

            animalBg={animate_bg}
            animalImg={whiteChick}
            foodImg={food}
            wordsBg={slide_bg}
            title="Комбикорм для бройлеров"
            description="Изготовлен из отборных зерновых продуктов с высокими показателями питательности.  Содержит фитобиотики для повышения иммунитета и ферменты для пищеварения."
            description2="«Мегакорм» обеспечивает высокую продуктивность птиц и темпы роста, так как содержит весь необходимый комплекс витаминов и микроэлементов, оптимальный для бройлеров."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            toggleModal={props.toggleModal}

            animalBg={animate_bg}
            animalImg={whiteChick}
            foodImg={food}
            wordsBg={slide_bg}
            title="Комбикорм для бройлеров"
            description="Изготовлен из отборных зерновых продуктов с высокими показателями питательности.  Содержит фитобиотики для повышения иммунитета и ферменты для пищеварения."
            description2="«Мегакорм» обеспечивает высокую продуктивность птиц и темпы роста, так как содержит весь необходимый комплекс витаминов и микроэлементов, оптимальный для бройлеров."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            toggleModal={props.toggleModal}

            animalBg={animate_bg}
            animalImg={whiteChick}
            foodImg={food}
            wordsBg={slide_bg}
            title="Комбикорм для бройлеров"
            description="Изготовлен из отборных зерновых продуктов с высокими показателями питательности.  Содержит фитобиотики для повышения иммунитета и ферменты для пищеварения."
            description2="«Мегакорм» обеспечивает высокую продуктивность птиц и темпы роста, так как содержит весь необходимый комплекс витаминов и микроэлементов, оптимальный для бройлеров."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            toggleModal={props.toggleModal}

            animalBg={animate_bg}
            animalImg={whiteChick}
            foodImg={food}
            wordsBg={slide_bg}
            title="Комбикорм для бройлеров"
            description="Изготовлен из отборных зерновых продуктов с высокими показателями питательности.  Содержит фитобиотики для повышения иммунитета и ферменты для пищеварения."
            description2="«Мегакорм» обеспечивает высокую продуктивность птиц и темпы роста, так как содержит весь необходимый комплекс витаминов и микроэлементов, оптимальный для бройлеров."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            toggleModal={props.toggleModal}

            animalBg={animate_bg}
            animalImg={whiteChick}
            foodImg={food}
            wordsBg={slide_bg}
            title="Комбикорм для бройлеров"
            description="Изготовлен из отборных зерновых продуктов с высокими показателями питательности.  Содержит фитобиотики для повышения иммунитета и ферменты для пищеварения."
            description2="«Мегакорм» обеспечивает высокую продуктивность птиц и темпы роста, так как содержит весь необходимый комплекс витаминов и микроэлементов, оптимальный для бройлеров."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            toggleModal={props.toggleModal}

            animalBg={animate_bg}
            animalImg={whiteChick}
            foodImg={food}
            wordsBg={slide_bg}
            title="Комбикорм для бройлеров"
            description="Изготовлен из отборных зерновых продуктов с высокими показателями питательности.  Содержит фитобиотики для повышения иммунитета и ферменты для пищеварения."
            description2="«Мегакорм» обеспечивает высокую продуктивность птиц и темпы роста, так как содержит весь необходимый комплекс витаминов и микроэлементов, оптимальный для бройлеров."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            toggleModal={props.toggleModal}

            animalBg={animate_bg}
            animalImg={whiteChick}
            foodImg={food}
            wordsBg={slide_bg}
            title="Комбикорм для бройлеров"
            description="Изготовлен из отборных зерновых продуктов с высокими показателями питательности.  Содержит фитобиотики для повышения иммунитета и ферменты для пищеварения."
            description2="«Мегакорм» обеспечивает высокую продуктивность птиц и темпы роста, так как содержит весь необходимый комплекс витаминов и микроэлементов, оптимальный для бройлеров."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperComponent;
