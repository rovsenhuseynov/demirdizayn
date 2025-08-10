import ReusableButton from "../../../reusableСomponents/Button/ReusableButton";
import { useNavigate } from "react-router-dom";
import "./HeroBanner.scss";

const HeroBanner = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <div className="hero-banner-wrapper">
      <h3 className="hero-banner-pretitle">Biz nə təklif edirik?</h3>

      <div className="hero-banner">
        <h1 className="hero-banner__title">
          Etibarlılıq, keyfiyyət <span className="no-transform">&</span>
          <br />
          modern üslub
        </h1>
        <div className="hero-banner__button-wrapper">
          <ReusableButton onClick={handleNavigate}>
            Kataloqa keçin
          </ReusableButton>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

