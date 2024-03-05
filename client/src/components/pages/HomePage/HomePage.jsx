import { useState } from "react";
import IntroSlider from "../../modules/IntroSlider/IntroSlider.jsx";
import MainContentHeader from "../../modules/MainContentHeader/MainContentHeader.jsx";
import ProductSection from "../../modules/ProductSection/ProductSection.jsx";
import "./HomePage.css";

export default function HomePage() {
  const [currentSortingType, setCurrentSortingType] = useState();

  return (
    <>
      <IntroSlider />

      <main className="main-content">
        <MainContentHeader setCurrentSortingType={setCurrentSortingType} />

        <ProductSection currentSortingType={currentSortingType} />
      </main>
    </>
  );
}
