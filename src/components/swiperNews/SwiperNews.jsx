import React from "react";
import "./SwiperNews.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import pig from "../assets/woman.png";
import eggs from "../assets/eggs.png";
import peels from "../assets/peels.png";
import SwiperNewsItem from "../UI/swiperNewsItem/SwiperNewsItem";
function SwiperNews() {
  return (
    <div className="swiper-news">
      <div className="swiper-news_inner">
        <div className="swiper-news_inner_left">
          <div className="news_inner_left_title">
            <h1>Полезные материалы</h1>
          </div>
          <div className="news_inner_left_word">
            <p>
              Мы постоянно проводим научные изыскания, направленные на
              увеличение эффективности животноводства и птицеводства. <br />
              <br /> Собрали для вас полезные исследования наших научных
              сотрудников, схемы кормления и другие материалы, которые
              пригодятся для лучших результатов на вашем предприятии.
            </p>
          </div>
        </div>
        <div className="swiper-news_inner_right">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <SwiperNewsItem
                animImg={pig}
                title=" Витамины для кур-несушек"
                text="Витамины необходимы курам яичного направления для нормальной жизнедеятельности и увеличения продуктивного периода."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperNewsItem
                animImg={peels}
                title=" Производство кормадля сельсхоз животных"
                text="Витамины необходимы курам яичного направления для нормальной жизнедеятельности и увеличения продуктивного периода."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperNewsItem
                animImg={eggs}
                title=" Полнорационные корма"
                text="Витамины необходимы курам яичного направления для нормальной жизнедеятельности и увеличения продуктивного периода."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperNewsItem
                animImg={pig}
                title=" Витамины для кур-несушек"
                text="Витамины необходимы курам яичного направления для нормальной жизнедеятельности и увеличения продуктивного периода."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperNewsItem
                animImg={peels}
                title=" Витамины для кур-несушек"
                text="Витамины необходимы курам яичного направления для нормальной жизнедеятельности и увеличения продуктивного периода."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperNewsItem
                animImg={eggs}
                title=" Витамины для кур-несушек"
                text="Витамины необходимы курам яичного направления для нормальной жизнедеятельности и увеличения продуктивного периода."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SwiperNews;
