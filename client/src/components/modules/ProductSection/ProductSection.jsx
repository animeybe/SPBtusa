import { useState, useEffect } from "react";
import ProductCard from "../../modules/ProductCard/ProductCard.jsx";
import productList from "../../../content.js";
import "./ProductSection.css";

const initialCountProducts = 12;
const productsPerСlick = 12;
let arrayForHoldingProducts = [];

export default function ProductSection() {
  const [limitedProductList, setPostsToShow] = useState([]);
  const [next, setNext] = useState(initialCountProducts);

  const loopWithSlice = (start, end) => {
    const slicedPosts = productList.slice(start, end);
    arrayForHoldingProducts = [...arrayForHoldingProducts, ...slicedPosts];
    console.log(arrayForHoldingProducts);
    setPostsToShow(arrayForHoldingProducts);
  };
  const handleShowMorePosts = () => {
    loopWithSlice(next, next + productsPerСlick);
    setNext(next + productsPerСlick);
  };

  useEffect(() => {
    loopWithSlice(0, initialCountProducts);
  }, []);

  return (
    <>
      <section className="product-section">
        {limitedProductList.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </section>
      {limitedProductList.length < productList.length && (
        <div className="product-section__button">
          <button onClick={handleShowMorePosts}>Загрузить ещё</button>
        </div>
      )}
    </>
  );
}
