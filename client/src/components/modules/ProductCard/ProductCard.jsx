/* eslint-disable react/prop-types */
import "./ProductCard.css";

export default function ProductCard(props) {
  return (
    <>
      <article
        key={props.id}
        className={`product-section__card ${
          props.preOrder ? "product-section__card_preorder" : ""
        }`}
      >
        {props.preOrder && (
          <div className="product-card__preorder-mark-wrapper">
            <div className="product-card__preorder-mark">Предзаказ</div>
          </div>
        )}
        <div
          href="#"
          className="product-card__image"
          style={{ backgroundImage: `url(${props.firstImage})` }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundImage = `url(${props.secondImage})`)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundImage = `url(${props.firstImage})`)
          }
        ></div>
        <div className="product-card-info">
          <div className="product-card__title">{props.name}</div>
          {props.preOrder === true && (
            <div className="pre-order__info">{props.preOrderText}</div>
          )}
          <div className="product-card__price">{props.price} р.</div>
        </div>
      </article>
    </>
  );
}
