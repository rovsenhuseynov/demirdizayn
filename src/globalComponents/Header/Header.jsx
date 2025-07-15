import "./Header.scss";
import HeaderNav from "./HeaderNav/HeaderNav";

const Header = () => {
  return (
    <div className="header">
      <HeaderNav />
      <div className="header__title">
        <h1 className="header__main-title">
          Loft Mebel <span className="no-transform">&</span>
          <br />
          Metal İşlərİ
        </h1>
        <div className="header__subtitle-clip">
          <p className="header__subtitle">Yüksək keyfiyyət təminatı</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
