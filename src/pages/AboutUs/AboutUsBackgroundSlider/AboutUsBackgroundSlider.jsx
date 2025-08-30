import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundSlider from "../../../reusableСomponents/BackgroundSlider/BackgroundSlider";
import ReusableButton from "../../../reusableСomponents/Button/ReusableButton";
import aboutData from "../../../data/aboutData";
import "./AboutUsBackgroundSlider.scss";

const AboutUsBackgroundSlider = () => {
  const navigate = useNavigate();

  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Формируем массив изображений с учётом портретных версий
  const images = aboutData.sliderImages.map((img) =>
    isPortrait && img.imagePortrait ? img.imagePortrait : img.image
  );

  return (
    <section className="aboutus-cta">
      {/* Контент над слайдером */}
      <div className="cta-clean" data-aos="fade-up">
        <div className="cta-clean__inner">
          <h3>
            Əgər qeyri-adi həllər axtarırsınızsa, öz konsepsiyanızı həyata
            keçirmək istəyirsinizsə və ya sadəcə keyfiyyətli metalın və “loft”
            üslubunun ahəngini dəyərləndirirsinizsə — əməkdaşlığa hazırıq. Sizin
            arzularınız, bizim bacarığımız — nəticə sizi xoş təəccübləndirəcək.
          </h3>
          <p>Bizimlə əlaqə saxlayın və ideyalarınızı gerçəkləşdirək.</p>
        </div>
      </div>

      {/* Слайдер с кнопкой по центру */}
      <BackgroundSlider
        images={images}
        interval={5000}
        transition={2000}
        blur={25}
        scale={1.1}
        height={isPortrait ? "60dvh" : "90dvh"}
        width="100%"
        overlay={
          <div className="aboutus-slider__overlay">
            <ReusableButton
              className="cta-clean__btn"
              onClick={() => navigate("/contacts")}
            >
              Əlaqə saxlayın
            </ReusableButton>
          </div>
        }
        className="aboutus-slider"
      />
    </section>
  );
};

export default AboutUsBackgroundSlider;
