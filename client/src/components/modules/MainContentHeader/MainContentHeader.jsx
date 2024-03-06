/* eslint-disable react/prop-types */
import SearchIconSvg from "../../../assets/search.svg";
import "./MainContentHeader.css";

export default function MainContentHeader({
  setCurrentSortingType,
  setBrandName,
  setSearchByName,
}) {
  const bodyBlock = document.querySelector("body");
  bodyBlock.addEventListener("click", (event) => {
    const brandChoosingFieldBlock = document.querySelector(
      ".main-content-header__brand-choosing-field"
    );
    if (
      !(
        // IF is NOT BRAND
        (
          event.target ===
          brandChoosingFieldBlock.parentElement.querySelector(
            ".main-content-header__brand"
          )
        )
      )
    ) {
      brandChoosingFieldBlock.classList.remove("show");
      if (
        // IF is SEARCH BUTTON
        event.target.classList.contains("main-content-header__search-btn") ||
        event.target.parentElement.classList.contains(
          "main-content-header__search-btn"
        )
      ) {
        // SET SEARCH BY NAME
        const input = document.querySelector(
          ".main-content-header__search-input"
        );
        if (input.value) {
          setSearchByName(input.value);
        } else {
          setSearchByName("default");
        }
      } else if (
        // SET BRAND
        event.target.classList.contains("main-content-header__brand-item")
      ) {
        setBrandName(event.target.getAttribute("value"));
      }
    }
  });

  return (
    <header className="main-content-header">
      <div className="main-content-header__title">Все товары</div>
      <div className="main-content-header-sorting">
        <div
          onClick={() => {
            const brandChoosingField = document.querySelector(
              ".main-content-header__brand-choosing-field"
            );
            brandChoosingField.classList.toggle("show");
          }}
          className="main-content-header_right main-content-header__brand-wrapper"
        >
          <div className="main-content-header__brand noselect">Бренд</div>
          <div className="main-content-header__brand-choosing-field">
            <div className="brand-choosing-field__container">
              <div
                className="main-content-header__brand-item"
                value="Hobby Horse Squad"
              >
                Hobby Horse Squad
              </div>
              <div className="main-content-header__brand-item" value="Kauzlav">
                Kauzlav
              </div>
              <div
                className="main-content-header__brand-item"
                value="Mus.Autem.Tattoo"
              >
                Mus.Autem.Tattoo
              </div>
              <div
                className="main-content-header__brand-item"
                value="Sexual Pressure"
              >
                Sexual Pressure
              </div>
              <div
                className="main-content-header__brand-item"
                value="Yec Yourz"
              >
                Yec Yourz
              </div>
              <div className="main-content-header__brand-item" value="teplo">
                teplo
              </div>
              <div className="main-content-header__brand-item" value="Балдеж">
                Балдеж
              </div>
              <div className="main-content-header__brand-item" value="Дед">
                Дед
              </div>
              <div
                className="main-content-header__brand-item"
                value="ИКС - РЕЙ"
              >
                ИКС - РЕЙ
              </div>
              <div
                className="main-content-header__brand-item"
                value="Конч за 500"
              >
                Конч за 500
              </div>
              <div className="main-content-header__brand-item" value="Ля Кринж">
                Ля Кринж
              </div>
              <div className="main-content-header__brand-item" value="Шизик">
                Шизик
              </div>
              <div className="main-content-header__brand-item" value="Шрам">
                Шрам
              </div>
              <div className="main-content-header__brand-item" value="Эмпат">
                Эмпат
              </div>
            </div>
          </div>
        </div>
        <div className="main-content-header_left">
          <div className="main-content-header__search-field">
            <input
              className="main-content-header__search-input"
              type="text"
              placeholder="Поиск"
            />
            <div className="img-wrapper main-content-header__search-btn">
              <img src={SearchIconSvg} alt="" />
            </div>
          </div>
          <div className="main-content-header__order-wrapper">
            <select
              onChange={({ target: { value } }) => {
                setCurrentSortingType(value);
              }}
              className="main-content-header__order"
            >
              <option data-filter-value="default:asc" value="default:asc">
                Порядок: по умолчанию
              </option>
              <option data-filter-value="price:asc" value="price:asc">
                Цена: по возрастанию
              </option>
              <option data-filter-value="price:desc" value="price:desc">
                Цена: по убыванию
              </option>
              <option data-filter-value="title:asc" value="title:asc">
                Название: А—Я
              </option>
              <option data-filter-value="title:desc" value="title:desc">
                Название: Я—А
              </option>
              <option data-filter-value="created:desc" value="created:desc">
                Порядок: сперва новые
              </option>
              <option data-filter-value="created:asc" value="created:asc">
                Порядок: сперва старые
              </option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
