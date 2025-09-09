import { useNavigate, useLocation } from "react-router-dom";
// import ReusableButton from "../../reusableСomponents/Button/ReusableButton";
import "./Header.scss";
import HeaderNav from "./HeaderNav/HeaderNav";
import ReusableButton from "../../reusableComponents/Button/ReusableButton";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <div className="header">
      <HeaderNav />
      <div className="header__title">
        <h1 className="header__main-title">
          Loft Mebel <span className="no-transform">&</span>
          <br />
          Qaynaq İşlərİ
        </h1>
        <div className="header__subtitle-clip">
          <p className="header__subtitle">Yüksək keyfiyyət təminatı</p>
        </div>
      </div>

      {/* Кнопка будет показываться только если путь не /about */}
      {location.pathname !== "/about" && (
        <div className="header__button-wrapper">
          <ReusableButton onClick={handleNavigate}>Haqqımızda</ReusableButton>
        </div>
      )}
    </div>
  );
};

export default Header;
