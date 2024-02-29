import HederLogo from "../../../assets/img/header-logo.png";
import VkIcon from "../../../assets/vk-icon-circle.svg";
import TelegramIcon from "../../../assets/telegram-icon-circle.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <a href="#" className="img-wrapper">
        <img src={HederLogo} alt="Питрская тусовка" className="header-logo" />
      </a>
      <div className="header-by-name">
        <a href="#" className="header-by-name__link">
          Юлик
        </a>
        <a href="#" className="header-by-name__link">
          Кузьма
        </a>
        <a href="#" className="header-by-name__link">
          Антон Власов
        </a>
        <a href="#" className="header-by-name__link">
          Друзья
        </a>
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
      <a
        href="#"
        className="header-delivery-link header-delivery-and-recommendations"
      >
        Доставка
      </a>
      <a
        href="#"
        className="header-recommendations-link header-delivery-and-recommendations"
      >
        Рекомендации по уходу
      </a>
    </header>
  );
}
