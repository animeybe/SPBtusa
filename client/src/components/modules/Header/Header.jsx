import HederLogo from "../../../assets/img/header-logo.png";
import VkIcon from "../../../assets/vk-icon-circle.svg";
import TelegramIcon from "../../../assets/telegram-icon-circle.svg";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <Link to="/" className="img-wrapper">
          <img src={HederLogo} alt="Питрская тусовка" className="header-logo" />
        </Link>
        <div className="header-by-name">
          <Link to="#" className="header-by-name__link">
            Юлик
          </Link>
          <Link to="#" className="header-by-name__link">
            Кузьма
          </Link>
          <Link to="#" className="header-by-name__link">
            Антон Власов
          </Link>
          <Link to="#" className="header-by-name__link">
            Друзья
          </Link>
        </div>
        <div className="header-contacts">
          <div className="header-contacts__email">spbtusa@gmail.com</div>
          <img
            src={VkIcon}
            alt="#"
            className="header-contacts_vk header-contacts__icon"
          />
          <img
            src={TelegramIcon}
            alt="#"
            className="header-contacts_telegram header-contacts__icon"
          />
        </div>
        <Link
          to="/delivery"
          className="header-delivery-link header-delivery-and-recommendations"
        >
          Доставка
        </Link>
        <Link
          to="/recommendations"
          className="header-recommendations-link header-delivery-and-recommendations"
        >
          Рекомендации по уходу
        </Link>
      </header>
    </>
  );
}
