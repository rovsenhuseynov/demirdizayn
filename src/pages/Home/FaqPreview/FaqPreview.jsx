import { useNavigate } from "react-router-dom";
import ReusableButton from "../../../reusableComponents/Button/ReusableButton";
import "./FaqPreview.scss";

const FaqPreview = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/faq");
  };

  return (
    <section className="faq-preview">
      <h2 className="faq-preview__title">Ən çox verilən suallar</h2>

      <ul className="faq-preview__list">
        <li className="faq-preview__item">
          <h4 className="faq-preview__item-title">
            Ölçü götürülməsi üçün müraciət necə edilir?
          </h4>
          <p className="faq-preview__item-text">
            Saytımız və ya telefon vasitəsilə asanlıqla müraciət edə bilərsiniz.
          </p>
        </li>
        <li className="faq-preview__item">
          <h4 className="faq-preview__item-title">
            Çatdırılma və quraşdırma xidməti varmı?
          </h4>
          <p className="faq-preview__item-text">
            Bəli, biz Bakı daxilində çatdırılma və quraşdırma təklif edirik.
          </p>
        </li>
        <li className="faq-preview__item">
          <h4 className="faq-preview__item-title">
            Ödəniş üsulları hansılardır?
          </h4>
          <p className="faq-preview__item-text">
            Nağd, kartla və ya online ödəniş mümkündür.
          </p>
        </li>
      </ul>

      <div className="faq-preview__button-wrapper">
        <ReusableButton onClick={handleNavigate}>
          Bütün suallara baxın
        </ReusableButton>
      </div>
    </section>
  );
};

export default FaqPreview;
