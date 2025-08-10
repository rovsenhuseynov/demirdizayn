import Logo from "../../reusableСomponents/Logo/Logo";
import instagramIcon from "../../assets/icons/Social_networks/instagram/instagram.svg";
import facebookIcon from "../../assets/icons/Social_networks/facebook/facebook.svg";
import telegramIcon from "../../assets/icons/Social_networks/telegram/telegram.svg";
import whatsappIcon from "../../assets/icons/Social_networks/whatsapp/whatsapp.svg";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Верхний блок: логотип, меню и соцсети */}
      <div className="footer__main">
        <div className="footer__container">
          <div className="footer__logo">
            <Logo />
          </div>

          <nav className="footer__nav">
            <ul className="footer__menu">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/products">Catalog</a>
              </li>
              <li>
                <a href="/contacts">Contacts</a>
              </li>
            </ul>
          </nav>

          <div className="footer__socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noreferrer">
              <img src={telegramIcon} alt="Telegram" />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
              <img src={whatsappIcon} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>

      {/* Нижний блок: копирайт */}
      <div className="footer__bottom">
        <div className="footer__container">
          <p>
            © {currentYear} LoftCraft. All rights reserved. |{" "}
            <a
              href="/privacy-policy"
              style={{ color: "#bbb", textDecoration: "underline" }}
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              style={{ color: "#bbb", textDecoration: "underline" }}
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
