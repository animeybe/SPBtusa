import "./Footer.css";
import VK from "../../../assets/vk-icon.svg";
import TG from "../../../assets/telegram-icon.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer__contacts-title">Контакты:</div>
        <div className="footer__email">spbtusa@gmail.com</div>
        <div className="footer__sub-text">
          По любым вопросам и для заказа свяжитесь с нами по телефону, почте и в
          соцсетях.
        </div>
        <div className="footer-social-networks">
          <img
            src={VK}
            className="footer-social-networks_vk footer-social-networks__img"
          />
          <img
            src={TG}
            className="footer-social-networks_telegram footer-social-networks__img"
          />
        </div>
      </div>
    </footer>
  );
}
