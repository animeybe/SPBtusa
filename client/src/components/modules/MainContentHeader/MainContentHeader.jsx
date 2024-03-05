import SearchIconSvg from "../../../assets/search.svg";
import "./MainContentHeader.css";

// eslint-disable-next-line react/prop-types
export default function MainContentHeader({ setCurrentSortingType }) {
  const bodyBlock = document.querySelector("body");
  bodyBlock.addEventListener("click", (event) => {
    const brendChoosingFieldBlock = document.querySelector(
      ".main-content-header__brend-choosing-field"
    );
    if (
      !(
        event.target ===
        brendChoosingFieldBlock.parentElement.querySelector(
          ".main-content-header__brend"
        )
      )
    ) {
      brendChoosingFieldBlock.classList.remove("show");
    }
  });

  return (
    <header className="main-content-header">
      <div className="main-content-header__title">Все товары</div>
      <div className="main-content-header-sorting">
        <div
          onClick={() => {
            const brendChoosingField = document.querySelector(
              ".main-content-header__brend-choosing-field"
            );
            brendChoosingField.classList.toggle("show");
          }}
          className="main-content-header_right main-content-header__brend-wrapper"
        >
          <div className="main-content-header__brend noselect">Бренд</div>
          <div className="main-content-header__brend-choosing-field">
            <div className="brend-choosing-field__container">
              <div className="main-content-header__brend-item">
                Hobby Horse Squad
              </div>
              <div className="main-content-header__brend-item">Kauzlav</div>
              <div className="main-content-header__brend-item">
                Mus.Autem.Tattoo
              </div>
              <div className="main-content-header__brend-item">
                Sexual Pressure
              </div>
              <div className="main-content-header__brend-item">Yec Yourz</div>
              <div className="main-content-header__brend-item">teplo</div>
              <div className="main-content-header__brend-item">Балдеж</div>
              <div className="main-content-header__brend-item">Дед</div>
              <div className="main-content-header__brend-item">ИКС - РЕЙ</div>
              <div className="main-content-header__brend-item">Конч за 500</div>
              <div className="main-content-header__brend-item">Ля Кринж</div>
              <div className="main-content-header__brend-item">Шизик</div>
              <div className="main-content-header__brend-item">Шрам</div>
              <div className="main-content-header__brend-item">Эмпат</div>
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
