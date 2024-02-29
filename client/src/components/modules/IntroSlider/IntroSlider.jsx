import Yulius from "../../../assets/img/pages/HomePage/intro-banner/1.jpg";
import Kuzma from "../../../assets/img/pages/HomePage/intro-banner/2.jpg";
import Anton from "../../../assets/img/pages/HomePage/intro-banner/3.jpg";
import "./IntroSlider.css";

let currentIntroImgIndex = 0;

export default function IntroSlider() {
  function toggleIntroImgRight(currentIntroImgIndex) {
    const IntroBannerBlock = document.querySelector(".intro-banner");

    if (IntroBannerBlock) {
      if (currentIntroImgIndex === 0) {
        IntroBannerBlock.style.marginLeft = "-100%";
        currentIntroImgIndex = 1;
      } else if (currentIntroImgIndex === 1) {
        IntroBannerBlock.style.marginLeft = "-200%";
        currentIntroImgIndex = 2;
      } else {
        IntroBannerBlock.style.marginLeft = "0%";
        currentIntroImgIndex = 0;
      }
    }
    return currentIntroImgIndex;
  }
  function toggleIntroImgLeft(currentIntroImgIndex) {
    const IntroBannerBlock = document.querySelector(".intro-banner");

    if (currentIntroImgIndex === 0) {
      IntroBannerBlock.style.marginLeft = "-200%";
      currentIntroImgIndex = 2;
    } else if (currentIntroImgIndex === 1) {
      IntroBannerBlock.style.marginLeft = "0%";
      currentIntroImgIndex = 0;
    } else {
      IntroBannerBlock.style.marginLeft = "-100%";
      currentIntroImgIndex = 1;
    }
    return currentIntroImgIndex;
  }
  setInterval(() => {
    currentIntroImgIndex = toggleIntroImgRight(currentIntroImgIndex);
  }, 5000);

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
            currentIntroImgIndex = toggleIntroImgLeft(currentIntroImgIndex);
          }}
        >
          &lt;
        </span>
        <span
          className="intro-slider__arrow intro-slider__arrow_right"
          onClick={() => {
            currentIntroImgIndex = toggleIntroImgRight(currentIntroImgIndex);
          }}
        >
          &gt;
        </span>
      </div>
    </section>
  );
}
