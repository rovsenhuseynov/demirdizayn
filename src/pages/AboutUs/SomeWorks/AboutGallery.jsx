import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutGallery.scss";
import ReusableButton from "../../../reusableComponents/Button/ReusableButton";

const AboutGallery = ({ items }) => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const openLightbox = (index) => setActive(index);
  const closeLightbox = () => setActive(null);

  return (
    <div className="about__gallery">
      <h2 data-aos="fade-up" className="about__gallery-title">
        Bəzi görülən işlərimiz
      </h2>
      <div className="about__grid">
        {items.map((item, i) => (
          <div
            className="about__item"
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 150}
          >
            <div
              className="about__image-wrapper"
              onClick={() => openLightbox(i)}
            >
              <img src={item.src} alt={item.text} />
              <div className="about__overlay">
                <p>{item.text}</p>
                <span className="about__icon">🔍</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {active !== null && (
        <div className="about__lightbox" onClick={closeLightbox}>
          <div
            className="about__lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 👉 если big есть — показываем его, иначе src */}
            <img
              src={items[active].big ? items[active].big : items[active].src}
              alt={items[active].text}
            />
            <p>{items[active].text}</p>
            <button className="about__lightbox-close" onClick={closeLightbox}>
              ✖
            </button>
          </div>
        </div>
      )}

      {/* Кнопка перехода в products */}
      <div className="about__button-wrapper">
        <ReusableButton onClick={() => navigate("/products")}>
          İşlərimizin kataloqu
        </ReusableButton>
      </div>
    </div>
  );
};

export default AboutGallery;
