import React from "react";
import "./SliderAbout.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import pig from "../assets/woman.png";
import eggs from "../assets/eggs.png";
import peels from "../assets/peels.png";
import arrowRight from '../assets/arrow_right.svg';

import globus from "../assets/globus.svg"
function SliderAbout() {
  return (
    <div className="slider_about">
      <div className="slider_about_inner">
        <div className="slider_about_left">
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-0 0 500 500"
                width="100%"
                id="blobSvg"
                style={{ opacity: 1 }}
                transform="rotate(0)"
              >
                <image
                  class=""
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  clip-path="url(#shape)"
                  id="imgOfMySlider"
                  href={pig}
                  preserveAspectRatio="none"
                >
                  {" "}
                </image>
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" style={{ stopColor: "#30529F" }} />
                    <stop offset="100%" style={{ stopColor: "#30529F" }} />
                  </linearGradient>
                </defs>
                <clipPath id="shape">
                  <path id="blob" fill="url(#gradient)">
                    <animate
                      attributeName="d"
                      dur="10000ms"
                      repeatCount="indefinite"
                      values="
                            M440.5,320.5Q418,391,355.5,442.5Q293,
                            494,226,450.5Q159,407,99,367Q39,
                            327,31.5,247.5Q24,
                            168,89,125.5Q154,
                            83,219.5,68Q285,
                            53,335.5,94.5Q386,
                            136,424.5,193Q463,
                            250,440.5,320.5Z;M453.78747,
                            319.98894Q416.97789,
                            389.97789,353.96683,436.87838Q290.95577,
                            483.77887,223.95577,447.43366Q156.95577,
                            411.08845,105.64373,365.97789Q54.33169,
                            320.86732,62.67444,252.61056Q71.01719,184.3538,
                            113.01965,135.21007Q155.02211,86.06634,
                            220.52211,66.46683Q286.02211,46.86732,335.5,
                            91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,
                            250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,
                            342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,
                            427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,
                            250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,
                            62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,
                            104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;
                            M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,
                            327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,
                            136,424.5,193Q463,250,440.5,320.5Z;
                            "
                    ></animate>
                  </path>
                </clipPath>
              </svg>
            </SwiperSlide>
            <SwiperSlide>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-0 0 500 500"
                width="100%"
                id="blobSvg"
                style={{ opacity: 1 }}
                transform="rotate(0)"
              >
                <image
                  class=""
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  ObjectFit="cover"
                  clip-path="url(#shape)"
                  id="imgOfMySlider"
                  href={peels}
                  preserveAspectRatio="none"
                >
                  {" "}
                </image>
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" style={{ stopColor: "#30529F" }} />
                    <stop offset="100%" style={{ stopColor: "#30529F" }} />
                  </linearGradient>
                </defs>
                <clipPath id="shape">
                  <path id="blob" fill="url(#gradient)">
                    <animate
                      attributeName="d"
                      dur="10000ms"
                      repeatCount="indefinite"
                      values="
                            M440.5,320.5Q418,391,355.5,442.5Q293,
                            494,226,450.5Q159,407,99,367Q39,
                            327,31.5,247.5Q24,
                            168,89,125.5Q154,
                            83,219.5,68Q285,
                            53,335.5,94.5Q386,
                            136,424.5,193Q463,
                            250,440.5,320.5Z;M453.78747,
                            319.98894Q416.97789,
                            389.97789,353.96683,436.87838Q290.95577,
                            483.77887,223.95577,447.43366Q156.95577,
                            411.08845,105.64373,365.97789Q54.33169,
                            320.86732,62.67444,252.61056Q71.01719,184.3538,
                            113.01965,135.21007Q155.02211,86.06634,
                            220.52211,66.46683Q286.02211,46.86732,335.5,
                            91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,
                            250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,
                            342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,
                            427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,
                            250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,
                            62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,
                            104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;
                            M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,
                            327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,
                            136,424.5,193Q463,250,440.5,320.5Z;
                            "
                    ></animate>
                  </path>
                </clipPath>
              </svg>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-0 0 500 500"
                width="100%"
                id="blobSvg"
                style={{ opacity: 1 }}
                transform="rotate(0)"
              >
                <image
                  class=""
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  clip-path="url(#shape)"
                  id="imgOfMySlider"
                  href={eggs}
                  preserveAspectRatio="none"
                >
                  {" "}
                </image>
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" style={{ stopColor: "#30529F" }} />
                    <stop offset="100%" style={{ stopColor: "#30529F" }} />
                  </linearGradient>
                </defs>
                <clipPath id="shape">
                  <path id="blob" fill="url(#gradient)">
                    <animate
                      attributeName="d"
                      dur="10000ms"
                      repeatCount="indefinite"
                      values="
                            M440.5,320.5Q418,391,335.5,442.5Q293,
                            494,226,450.5Q159,407,99,367Q39,
                            327,31.5,247.5Q24,
                            168,89,125.5Q154,
                            83,219.5,68Q285,
                            53,335.5,94.5Q386,
                            136,494.5,193Q463,
                            250,440.5,320.5Z;M453.78747,
                            319.98894Q416.97789,
                            389.99789,353.96683,436.87838Q290.95577,
                            483.77887,223.95577,447.43366Q156.95577,
                            411.08845,105.64373,365.97789Q54.33169,
                            320.86732,62.67444,252.61056Q71.01719,184.3538,
                            413.01965,135.21007Q155.02211,86.06634,
                            220.52211,66.46683Q286.02211,46.86732,335.5,
                            91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,
                            250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,
                            342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,
                            427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,
                            250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,
                            62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,
                            104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;
                            M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,
                            327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,
                            136,424.5,193Q463,250,440.5,320.5Z;
                            "
                    ></animate>
                  </path>
                </clipPath>
              </svg>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="slider_about_right">
          <div className="slider_about_right_title">
            <h1>О компании</h1>
          </div>
          <div className="slider_about_right_words">
            <p>
              Кормовая компания «МЕГАМИКС» – крупнейший российский производитель
              премиксов и комбикормов для всех видов сельскохозяйственных
              животных и птиц. <br /> <br /> Наше производство – самое
              высокотехнологичное в отрасли, а аналитический центр «МЕГАМИКС»
              является одним из европейских лидеров по количественному и
              качественному контролю кормовых компонентов. <br /> <br /> Мы –
              первый производитель премиксов в России, сертифицированный по
              модулю GMP+FSA. Наши требования к качеству и безопасности
              собственной продукции и поддержанию деловой репутации – выше
              принятых на рынке.
            </p>
          </div>
          <div className="slider_about_right_items">
            <div className="slider_about_right_item">
              <h1>{">"}30% </h1>
              <span>рынка кормов </span>
            </div>
            <div className="slider_about_right_item">
              <h1>23 </h1>
              <span>года на рынке </span>
            </div>
            <div className="slider_about_right_item">
              <h1>400 + </h1>
              <span> дистрибьютеров</span>
            </div>
          </div>
          <div className="slider_about_right_link">
            <a href="#"> <img src={globus} alt="" />На сайт Мегамикс <span> <img src={arrowRight} alt="" /></span> </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderAbout;
