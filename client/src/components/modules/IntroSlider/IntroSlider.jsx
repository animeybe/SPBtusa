import { useEffect, useState } from "react";
import Yulius from "../../../assets/img/pages/HomePage/intro-banner/1.jpg";
import Kuzma from "../../../assets/img/pages/HomePage/intro-banner/2.jpg";
import Anton from "../../../assets/img/pages/HomePage/intro-banner/3.jpg";
import "./IntroSlider.css";

export default function IntroSlider() {
  const [currentIntroImgIndex, setCurrentIntroImgIndex] = useState(0);

  function toggleIntroImgRight(currentIntroImgIndex) {
    const IntroBannerBlock = document.querySelector(".intro-banner");

    if (IntroBannerBlock) {
      if (currentIntroImgIndex === 0) {
        IntroBannerBlock.style.marginLeft = "-100%";
        setCurrentIntroImgIndex(1)
      } else if (currentIntroImgIndex === 1) {
        IntroBannerBlock.style.marginLeft = "-200%";
        setCurrentIntroImgIndex(2)
      } else {
        IntroBannerBlock.style.marginLeft = "0%";
        setCurrentIntroImgIndex(0)
      }
    }
  }
  function toggleIntroImgLeft(currentIntroImgIndex) {
    const IntroBannerBlock = document.querySelector(".intro-banner");

    if (currentIntroImgIndex === 0) {
      IntroBannerBlock.style.marginLeft = "-200%";
      setCurrentIntroImgIndex(2);
    } else if (currentIntroImgIndex === 1) {
      IntroBannerBlock.style.marginLeft = "0%";
      setCurrentIntroImgIndex(0);
    } else {
      IntroBannerBlock.style.marginLeft = "-100%";
      setCurrentIntroImgIndex(1);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      toggleIntroImgRight(currentIntroImgIndex);
    }, 5000);
    
    // очистка интервала
    return () => clearInterval(timer);
  });

  return (
    <section className="intro-slider">
      <div className="intro-banner">
        <img src={Yulius} alt="#" className="intro-banner__img" />
        <img src={Kuzma} alt="#" className="intro-banner__img" />
        <img src={Anton} alt="#" className="intro-banner__img" />
      </div>
      <div className="intro-slider-arrows">
        <span
          className="intro-slider__arrow intro-slider__arrow_left"
          onClick={() => {
            toggleIntroImgLeft(currentIntroImgIndex);
          }}
        >
          &lt;
        </span>
        <span
          className="intro-slider__arrow intro-slider__arrow_right"
          onClick={() => {
            toggleIntroImgRight(currentIntroImgIndex);
          }}
        >
          &gt;
        </span>
      </div>
    </section>
  );
}
