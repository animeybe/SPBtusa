/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ProductCard from "../../modules/ProductCard/ProductCard.jsx";
import EmptyProductsBlock from "../EmptyProductsBlock/EmptyProductsBlock.jsx";
import productList from "../../../content.js";
import "./ProductSection.css";

const initialCountProducts = 12;
const productsPerСlick = 12;

export default function ProductSection({
  currentSortingType = "default:asc",
  brandName = "default",
  setBrandName,
  setSearchByName,
  searchByName = "default",
}) {
  const [limitedProductList, setProductsToShow] = useState(productList);
  const [next, setNext] = useState(initialCountProducts);

  useEffect(() => {
    // SORT
    let sorted;
    if (brandName === "default" && searchByName === "default") {
      sorted = productList.sort(SORTING[currentSortingType].sortingFn);
    } else {
      console.log(limitedProductList);
      sorted = limitedProductList.sort(SORTING[currentSortingType].sortingFn);
    }
    setProductsToShow(sorted.slice(0, initialCountProducts));
  }, [currentSortingType]);

  useEffect(() => {
    // CHOOSE BRAND
    if (brandName === "default") return;
    const handpicked = productList.filter((value) => {
      return value.brandName === brandName;
    });
    const sorted = handpicked.sort(SORTING[currentSortingType].sortingFn);
    setProductsToShow(sorted.slice(0, initialCountProducts));
  }, [brandName]);

  useEffect(() => {
    // SEARCH
    let handpicked;
    if (searchByName === "default") {
      handpicked = productList;
      setBrandName("default");
    } else {
      handpicked = productList.filter((value) => {
        return (
          value.name.includes(searchByName) ||
          value.brandName.includes(searchByName)
        );
      });
      setBrandName("default");
    }
    const sorted = handpicked.sort(SORTING[currentSortingType].sortingFn);
    setProductsToShow(sorted.slice(0, initialCountProducts));
  }, [searchByName]);

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
      {(brandName !== "default" || searchByName !== "default") && (
        <div
          onClick={() => {
            const sorted = productList.sort(
              SORTING[currentSortingType].sortingFn
            );
            setProductsToShow(sorted.slice(0, initialCountProducts));
            setSearchByName("default")
            setBrandName("default");
          }}
          className="product-section__brand-name-wrapper"
        >
          <div className="product-section__brand-name">
            {brandName === "default" ? searchByName : brandName}
          </div>
        </div>
      )}
      {(brandName !== "default" || searchByName !== "default") && (
        <div className="product-section__count-of-found">
          Найдено: {limitedProductList.length}
        </div>
      )}
      <section className="product-section">
        {limitedProductList.length === 0 ? (
          <EmptyProductsBlock />
        ) : (
          limitedProductList.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))
        )}
      </section>
      {limitedProductList.length < productList.length &&
        limitedProductList.length !== 0 &&
        brandName === "default" &&
        searchByName === "default" && (
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
