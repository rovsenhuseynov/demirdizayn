import { useEffect, useState } from "react";
import BackgroundSlider from "../../../reusableСomponents/BackgroundSlider/BackgroundSlider";
import aboutData from "../../../data/aboutData";
import "./AboutUsBackgroundSlider.scss";
import CtaSection from "./AboutCta/CtaSection";

const AboutUsBackgroundSlider = () => {
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );
  const [sliderHeight, setSliderHeight] = useState(
    Math.round(window.innerHeight * 0.75) // фиксируем 75% экрана в пикселях
  );

  useEffect(() => {
    const handleResize = () => {
      const portrait = window.innerHeight > window.innerWidth;
      setIsPortrait(portrait);

      // при смене ориентации пересчитываем высоту
      setSliderHeight(Math.round(window.innerHeight * 0.75));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // массив изображений: портретные/обычные
  const images = aboutData.sliderImages.map((img) =>
    isPortrait && img.imagePortrait ? img.imagePortrait : img.image
  );

  return (
    <section className="aboutus-cta">
      <CtaSection />

      <BackgroundSlider
        images={images}
        interval={5000}
        transition={2000}
        blur={1}
        scale={1.1}
        height={`${sliderHeight}px`} // фиксированная высота вместо vh
        width="100%"
        className="aboutus-slider"
      />
    </section>
  );
};

export default AboutUsBackgroundSlider;
