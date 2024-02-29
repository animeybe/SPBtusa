import SearchIconSvg from "../../../assets/search.svg";
import "./MainContentHeader.css";

export default function MainContentHeader() {
  return (
    <header className="main-content-header">
      <div className="main-content-header__title">Все товары</div>
      <div className="main-content-header-sorting">
        <div className="main-content-header_right">Бренд</div>
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
          <div className="main-content-header__order">
            Порядок: по умолчанию
          </div>
        </div>
      </div>
    </header>
  );
}
