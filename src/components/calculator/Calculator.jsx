import React from "react";
import "./Calculator.scss";
import { useState } from "react";
import whiteChick from "../assets/whiteChiken.png";
import TabsPanelItem from "../UI/tabspanel/TabsPanelItem";
import arrowRight from "../assets/grouparrow.svg";
import RabbitTabs from "../assets/rabbitTabs.png" 
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Calculator() {
  const [value, setValue] = useState("30");
  const [edit, setEdit] = useState(true);

  const handleChange = (event) => {
    if (event.target.textContent.length > 4) {
      setValue(value.slice(0, value.length - 1));

      setEdit(false);
    }
    setEdit(true);
  };

  return (
    <div className="calculator">
      <div className="calculator_inner">
        <Tabs>
          <div className="calculator_wrap">
            <div className="calculator_left">
              <div className="calculator_title">
                <h1>Калькулятор корма</h1>
              </div>
              <div className="calculator_word">
                <p>
                  Выберите животное, введите количество голов и получите точный
                  расчет количества корма, необходимого для вашего поголовья.
                  Все просто.
                </p>
              </div>
              <TabList>
                <Tab>
                  <svg
                    width="59"
                    height="52"
                    viewBox="0 0 59 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="calcForBlob"
                      d="M12.3895 12.4498C7.07951 13.6088 2.94951 17.0861 2.94951 22.8816V28.677C0.589512 30.9952 -0.000488281 33.8929 -0.000488281 36.7907C1.17951 35.6316 2.94951 35.052 4.71951 34.4725C4.71951 35.6316 5.30951 36.7907 5.89951 37.3702L2.94951 44.9043C2.35951 46.0634 2.35951 47.2225 2.94951 48.3816C3.53951 50.1202 4.71951 51.2793 6.48951 51.2793C7.66951 51.2793 9.43951 50.6998 10.0295 49.5407C11.2095 48.3816 11.2095 46.6429 11.2095 44.9043L9.43951 40.2679C11.2095 40.8475 12.3895 41.427 14.7495 41.427C20.6495 41.427 24.7795 36.7907 24.7795 31.5748C24.7795 26.3588 20.0595 21.7225 14.1595 21.7225C11.7995 21.7225 10.0295 22.302 8.25951 23.4611C11.2095 20.5634 15.3395 18.8248 19.4695 18.8248C27.1395 18.8248 33.6295 24.6202 35.3995 32.7338L47.1995 29.2566L37.7595 25.1998L54.2795 18.8248L41.2995 18.2452C41.2995 18.2452 56.6395 6.6543 58.9995 0.279297L12.3895 12.4498ZM11.2095 27.5179C12.3895 27.5179 13.5695 28.677 13.5695 29.8361C13.5695 30.9952 12.3895 31.5748 11.2095 31.5748C10.0295 31.5748 9.43951 30.4157 9.43951 29.2566C9.43951 28.0975 10.0295 27.5179 11.2095 27.5179Z"
                      fill="#A9B6D7"
                      data-animal="rooster"
                      fill-opacity="1"
                    ></path>
                  </svg>
                </Tab>
                <Tab>
                  <svg
                    width="43"
                    height="45"
                    viewBox="0 0 43 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="calcForBlob"
                      d="M20.0044 22.5381C31.502 18.3969 39.8638 12.1852 42.9995 0.279297C29.4115 0.796944 18.9591 5.45577 10.0747 15.2911C5.37112 20.4675 2.23542 27.1969 0.667574 33.9264C-0.900275 39.1028 0.144956 41.6911 5.37112 44.2793H42.4769C40.909 31.8558 34.6376 23.5734 20.0044 22.5381ZM7.46158 35.9969C6.41635 35.9969 5.37112 34.9617 5.37112 33.9264C5.37112 32.8911 6.41635 31.8558 7.46158 31.8558C8.50682 31.8558 9.55206 32.8911 9.55206 33.9264C9.55206 34.9617 8.50682 35.9969 7.46158 35.9969Z"
                      fill="#A9B6D7"
                      fill-opacity="1"
                      data-animal="rabbit"
                    ></path>
                  </svg>
                </Tab>
                <Tab>
                  <svg
                    width="47"
                    height="45"
                    viewBox="0 0 47 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clipRule="evenodd"
                      class="calcForBlob"
                      d="M1.44238 15.0985C0.602007 17.4168 0.147332 19.9287 0.147332 22.5701C0.147332 34.5275 10.7055 44.5718 23.1834 44.5718C36.1412 44.5718 46.2195 35.0058 46.2195 22.5701C46.2195 20.0133 45.7367 17.5439 44.8557 15.2415C47.625 9.5285 45.7395 2.48165 45.7395 2.48165C45.7395 2.48165 41.4797 3.13479 37.5631 5.52045C33.5888 2.43645 28.5646 0.568359 23.1834 0.568359C17.5843 0.568359 12.5228 2.35447 8.57973 5.38645C4.72631 3.1103 0.626828 2.48174 0.626828 2.48174C0.626828 2.48174 -1.2274 9.41164 1.44238 15.0985ZM23.1834 32.136C16.9445 32.136 12.1453 27.8313 12.1453 22.5701C12.1453 17.3088 16.9445 13.0041 23.1834 13.0041C29.4223 13.0041 34.2215 17.3088 34.2215 22.5701C33.7416 27.8313 28.9424 32.136 23.1834 32.136ZM18.5685 24.9396C19.8504 24.9396 20.8895 23.9005 20.8895 22.6186C20.8895 21.3367 19.8504 20.2975 18.5685 20.2975C17.2866 20.2975 16.2474 21.3367 16.2474 22.6186C16.2474 23.9005 17.2866 24.9396 18.5685 24.9396ZM30.1738 22.6186C30.1738 23.9005 29.1346 24.9396 27.8528 24.9396C26.5709 24.9396 25.5317 23.9005 25.5317 22.6186C25.5317 21.3367 26.5709 20.2975 27.8528 20.2975C29.1346 20.2975 30.1738 21.3367 30.1738 22.6186Z"
                      fill="#A9B6D7"
                      fill-opacity="1"
                      data-animal="pig"
                    ></path>
                  </svg>
                </Tab>
                <Tab>
                  <svg
                    width="57"
                    height="43"
                    viewBox="0 0 57 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="calcForBlob"
                      d="M-0.000488281 4.32749V1.29135C1.55406 4.32749 4.66315 6.35159 7.77224 6.35159C11.3995 6.35159 14.5086 6.35159 18.1359 6.35159C22.2813 6.35159 26.945 15.46 29.0177 17.9901C30.5723 15.46 33.1632 6.85761 37.3086 6.35159C40.9359 6.35159 44.5631 6.35159 48.7086 6.35159C52.3359 6.35159 54.9268 4.32749 56.9995 0.279297V2.30339C56.9995 10.3998 50.7813 16.9781 42.4904 17.4841L32.645 42.2793H24.8722L13.9904 18.4962C6.2177 18.4962 -0.000488281 11.9179 -0.000488281 4.32749Z"
                      fill="#A9B6D7"
                      fill-opacity="1"
                      data-animal="cattle"
                    ></path>
                  </svg>
                </Tab>
                <Tab>
                  <svg
                    width="51"
                    height="47"
                    viewBox="0 0 51 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="calcForBlob"
                      d="M50.9795 17.3334C50.8583 15.2061 49.1617 13.5204 47.1015 13.1591L46.6571 13.0387C49.1617 9.98826 48.9193 6.2956 46.7783 3.56624C44.7181 0.877021 40.8401 -0.808758 36.3158 0.39537C36.3158 0.39537 12.8459 5.57312 7.15005 20.1029L4.88789 28.4516C2.70652 29.5754 0 32.947 0 36.6798C0.444354 36.4389 0.929103 36.2383 1.37346 35.9974C3.43364 34.994 5.93818 35.7566 7.06926 37.6832C7.19045 37.924 7.31164 38.2451 7.06926 38.5662C6.62491 39.4493 6.14016 40.6133 5.93818 41.9378C5.49383 44.9883 6.62491 47.1155 8.32153 46.9951C10.0182 46.8747 11.3916 45.3094 11.2704 42.4997C11.2704 42.1786 11.1492 41.8174 11.1492 41.4963C13.3306 42.1786 15.5928 42.3793 18.4205 42.3793C25.8129 42.3793 30.9432 36.3988 30.9432 29.7761C30.9432 23.1534 25.005 17.1729 17.6126 17.1729C14.6637 17.1729 12.4823 17.9756 10.2201 19.4206C13.8558 15.6878 19.1072 13.4401 24.3587 13.4401C34.0536 13.4401 42.1328 20.8656 44.2738 31.2211L46.334 30.338C47.5862 29.7761 48.5961 28.8931 49.1617 27.6488C50.2928 25.4011 49.606 22.9126 47.1015 22.5915L48.4749 21.7887C50.7371 21.1465 51.1007 18.7784 50.9795 17.3334ZM14.1789 24.8793C15.6736 24.8793 17.1278 26.3243 17.1278 27.8094C17.1278 29.2543 15.6332 30.0571 14.1789 30.0571C12.7247 30.0571 11.9975 28.6121 11.9975 27.127C11.9975 25.5617 12.6843 24.8793 14.1789 24.8793Z"
                      fill="#A9B6D7"
                      fill-opacity="1"
                      data-animal="chicken"
                    ></path>
                  </svg>
                </Tab>
                <Tab>
                  <svg
                    width="64"
                    height="41"
                    viewBox="0 0 64 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clipRule="evenodd"
                      class="calcForBlob"
                      d="M40.0611 2.26544C50.0541 4.17551 59.2922 16.8797 64 24.52C60.7578 29.3174 55.4726 33.6262 49.6988 36.8245C52.2304 31.2719 52.2304 18.8787 45.5684 15.9469C49.5212 20.6999 49.3879 26.3857 46.5455 31.4052C43.2588 37.1798 37.0409 40.6891 30.3789 40.9556C29.5795 41 28.7356 41 27.9362 41C25.7155 41 23.4948 40.8667 21.3629 40.6002C22.5177 34.9144 21.052 32.338 19.8529 30.2503C19.0978 28.9177 14.6565 21.8992 10.3928 20.3445C10.3928 20.3445 5.2408 20.4334 2.30951 20.4334C1.02151 20.4334 0 21.4995 0 21.4995C0 21.4995 1.68772 14.481 10.4372 12.7042C12.4802 9.19502 16.433 5.99675 21.3629 3.15385C21.3629 3.15385 26.2484 0 36.508 0C40.9049 0 45.4351 0.621885 45.4351 0.621885L40.0611 2.26544ZM32.0222 15.858C32.9104 15.3694 33.4434 14.481 33.6211 13.5482C33.8875 12.4377 33.2657 11.3272 32.0666 10.8385C30.6453 10.1722 29.0909 10.1722 27.5364 11.5049C26.6037 12.3044 25.4934 14.1701 26.0707 14.7475C27.5808 16.2578 30.29 16.8353 32.0222 15.858Z"
                      fill="#A9B6D7"
                      data-animal="bird"
                      fill-opacity="1"
                    ></path>
                  </svg>
                </Tab>
                <Tab>
                  <svg
                    width="55"
                    height="46"
                    viewBox="0 0 55 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipPath="url(#clip0_319_2645)"
                      fill-rule="evenodd"
                      clipRule="evenodd"
                      class="calcForBlob"
                      d="M54.3282 17.4204C52.3731 4.68521 40.2516 -0.0851651 29.1727 2.01347e-05C21.6999 2.01347e-05 15.1395 3.62039 11.881 9.62595C11.813 9.74824 11.7426 9.87343 11.6711 10.0007C11.0843 11.0451 10.4194 12.2284 10.3095 13.0851C9.67041 12.9891 8.40831 12.9096 7.62306 13.5871C6.72021 14.4722 6.47635 15.7373 7.07456 16.485C5.92503 17.0374 3.56579 18.3695 1.97521 20.6149C0.454579 23.2556 0.411133 27.6427 0.411133 27.6427C2.39865 26.4201 4.66583 25.6773 7.02452 25.5372C5.82657 30.221 3.79974 38.4604 3.79974 40.5908C3.79974 43.6148 5.58105 46 7.88371 46C10.1429 46 11.9677 43.5722 11.9677 40.5908C11.9677 38.5354 10.0267 30.5894 8.82098 25.8515C9.03603 25.9636 9.21995 26.0507 9.36112 26.1093C19.7048 32.447 25.8158 29.1447 30.0693 26.8462L30.172 26.7908C31.9098 25.8537 32.8222 30.5815 32.4747 32.6685C31.635 37.5328 29.7558 40.8521 28.1628 43.6661C27.9425 44.0553 27.7276 44.4348 27.5218 44.8074L45.5086 35.1815C51.8952 31.7741 55.4144 24.8315 54.4151 17.8037V17.6759V17.5482C54.3282 17.5056 54.3282 17.463 54.3282 17.4204ZM28.9988 11.9259C29.216 13.1611 28.1733 14.3111 26.6092 14.5667C25.0886 14.8222 22.3515 12.9481 22.3515 12.9481C22.3515 12.9481 24.3935 10.3926 25.9141 10.137C27.4347 9.88146 28.7816 10.6907 28.9988 11.9259Z"
                      fill="#A9B6D7"
                      data-animal="turkey"
                      fill-opacity="1"
                    ></path>
                  </svg>
                </Tab>
                <Tab>
                  <svg
                    width="66"
                    height="44"
                    viewBox="0 0 66 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clipRule="evenodd"
                      class="calcForBlob"
                      clipPath="url(#clip0_330_2772)"
                      d="M34.2256 0.230787C40.932 -0.554928 46.1584 0.73919 49.0722 1.89465C58.5074 5.59213 70.1163 13.9577 64.5662 31.5207L39.5908 43.9997C39.5908 43.9997 43.6146 39.5165 44.2158 33.8316C44.5396 31.1047 43.9383 28.8862 43.9383 28.8862C43.9383 28.8862 38.2032 34.2938 29.9243 31.382C27.288 30.5039 23.3567 27.6384 23.3567 27.6384L17.5291 30.4115C12.164 32.861 4.90259 33.8316 0 30.5963C0 30.5963 16.0028 19.9661 19.5179 16.361C19.5276 16.3538 19.5368 16.3469 19.5455 16.3403C17.4001 13.9341 19.1041 9.84026 19.9804 8.45768C21.9229 5.36104 24.7442 3.37364 28.0743 1.89465C29.6931 1.15516 32.4681 0.415661 34.2256 0.230787ZM33.1158 13.1261C32.3758 12.895 31.7283 11.9706 31.9133 11.2311C32.0058 10.8614 32.1908 10.2143 32.9308 9.56726C33.7171 8.9202 35.0583 8.73533 35.8446 9.28995C37.2784 10.353 36.3996 12.2942 35.5209 12.8026C34.5496 13.3572 33.7171 13.311 33.1158 13.1261Z"
                      fill="#A9B6D7"
                      data-animal="goose"
                      fill-opacity="1"
                    ></path>
                  </svg>
                </Tab>
              </TabList>
              <div className="calculator_span_content">
                <div className="calculator_span_header">
                
                  <h2>
                  <span contentEditable={edit} onInput={handleChange}>
                    {value}
                  </span>
                    голов <img src={arrowRight} alt="" />
                  </h2>
                </div>
                <div className="calculator_span_bottom">
                  <h1>92 кг корма</h1>
                </div>
              </div>
            </div>
            <div className="calculator_right">
              <TabPanel>
                <TabsPanelItem animalImg={whiteChick} />
              </TabPanel>
              <TabPanel>
                <TabsPanelItem animalImg={RabbitTabs} />
              </TabPanel>
              <TabPanel>
                <TabsPanelItem animalImg={whiteChick} />
              </TabPanel>
              <TabPanel>
                <TabsPanelItem animalImg={whiteChick} />
              </TabPanel>
              <TabPanel>
                <TabsPanelItem animalImg={whiteChick} />
              </TabPanel>
              <TabPanel>
                <TabsPanelItem animalImg={whiteChick} />
              </TabPanel>
              <TabPanel>
                <TabsPanelItem animalImg={whiteChick} />
              </TabPanel>
              <TabPanel>
                <TabsPanelItem animalImg={whiteChick} />
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default Calculator;
