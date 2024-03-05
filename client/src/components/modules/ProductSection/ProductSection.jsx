import { useState, useEffect } from "react";
import ProductCard from "../../modules/ProductCard/ProductCard.jsx";
import productList from "../../../content.js";
import "./ProductSection.css";

const initialCountProducts = 12;
const productsPerСlick = 12;

// eslint-disable-next-line react/prop-types
export default function ProductSection({ currentSortingType = "default:asc" }) {
  const [limitedProductList, setProductsToShow] = useState([]);
  const [next, setNext] = useState(initialCountProducts);

  useEffect(() => {
    const sorted = productList.sort(SORTING[currentSortingType].sortingFn);
    setProductsToShow(sorted.slice(0, initialCountProducts));
  }, [currentSortingType]);

  const loopWithSlice = (start, end) => {
    const slicedProduct = productList.slice(start, end);
    setProductsToShow(slicedProduct);
  };

  const handleShowMoreProducts = () => {
    loopWithSlice(0, next + productsPerСlick);
    setNext(next + productsPerСlick);
  };

  return (
    <>
      <section className="product-section">
        {limitedProductList.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </section>
      {limitedProductList.length < productList.length && (
        <div className="product-section__button">
          <button onClick={handleShowMoreProducts}>Загрузить ещё</button>
        </div>
      )}
    </>
  );
}
function DefaultSortIdAsc(a, b) {
  return a.id - b.id;
}
function SortPriceDesc(a, b) {
  return (
    parseInt(b.price.replace(/\s/g, "")) - parseInt(a.price.replace(/\s/g, ""))
  );
}
function SortPriceAsc(a, b) {
  return (
    parseInt(a.price.replace(/\s/g, "")) - parseInt(b.price.replace(/\s/g, ""))
  );
}
function SortTitleDesc(a, b) {
  return b.name.toLowerCase() < a.name.toLowerCase() ? -1 : 1;
}
function SortTitleAsc(a, b) {
  return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
}
function SortCreatedDesc(a, b) {
  return b.createdDate - a.createdDate;
}
function SortCreatedAsc(a, b) {
  return a.createdDate - b.createdDate;
}
const SORTING = {
  "default:asc": {
    key: "default:asc",
    sortingFn: DefaultSortIdAsc,
  },
  "price:asc": {
    key: "price:asc",
    sortingFn: SortPriceAsc,
  },
  "price:desc": {
    key: "price:desc",
    sortingFn: SortPriceDesc,
  },
  "title:asc": {
    key: "title:asc",
    sortingFn: SortTitleAsc,
  },
  "title:desc": {
    key: "title:desc",
    sortingFn: SortTitleDesc,
  },
  "created:asc": {
    key: "created:asc",
    sortingFn: SortCreatedAsc,
  },
  "created:desc": {
    key: "created:desc",
    sortingFn: SortCreatedDesc,
  },
};
