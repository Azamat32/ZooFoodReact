import { useState,useEffect } from 'react'
import 'normalize.css';
import WebFont from 'webfontloader';
import pig from '../src/components/assets/pig1.png'
import imageLeft from '../src/components/assets/background.jpg'
import imageRight from '../src/components/assets/backgroundRight.jpg'
import Modal from './components/UI/modal/modal';
import './App.scss'
import Header from './components/UI/header/Header'
import Intro from './components/intro/Intro';
import SwiperComponent from './components/swiperComponent/Swiper';
import Catalog from './components/catalog/Catalog';
import Calculator from './components/calculator/Calculator';
import SliderAbout from './components/sliderAbout/SliderAbout';
import YanMap from './components/yanMap/YanMap';
import SwiperNews from './components/swiperNews/SwiperNews';
import Footer from './components/UI/footer/Footer';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Century Gothic', 'Montserrat']
      }
    });
   }, []);
  return (
    <div className="App">
      <div className="pig_banner">
        <img src={pig} alt="" />
      </div>
      <div className="bg_image">
            <img className='top_left_bg' src={imageLeft} alt="" />
            <img className='top_right_bg' src={imageRight} alt="" />
      </div>
      {isOpen && ( <Modal toggleModal={toggleModal} />)}
        <div className="container">
        <Header />
        <Intro />
        <SwiperComponent toggleModal={toggleModal}  />
        <Catalog />
        <Calculator />
        <SliderAbout />
        <YanMap />

        <SwiperNews />

        <Footer />
        </div>
    </div>
  )
}

export default App
