// import { useEffect, useState } from "react";
// import BackgroundSlider from "../../../reusableСomponents/BackgroundSlider/BackgroundSlider";
// import aboutData from "../../../data/aboutData";
// import "./AboutUsBackgroundSlider.scss";
// import CtaSection from "./AboutCta/CtaSection";

// const AboutUsBackgroundSlider = () => {
//   const [isPortrait, setIsPortrait] = useState(
//     window.innerHeight > window.innerWidth
//   );

//   useEffect(() => {
//     const handleResize = () => {
//       setIsPortrait(window.innerHeight > window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Формируем массив изображений с учётом портретных версий
//   const images = aboutData.sliderImages.map((img) =>
//     isPortrait && img.imagePortrait ? img.imagePortrait : img.image
//   );

//   return (
//     <section className="aboutus-cta">
//       {/* Контекст */}
//       <CtaSection />

//       {/* Слайдер */}
//       <BackgroundSlider
//         images={images}
//         interval={5000}
//         transition={2000}
//         blur={1}
//         scale={1.1}
//         height={isPortrait ? "60dvh" : "90dvh"}
//         width="100%"
//         className="aboutus-slider"
//       />
//     </section>
//   );
// };

// export default AboutUsBackgroundSlider;




import { useEffect, useState } from "react";
import BackgroundSlider from "../../../reusableСomponents/BackgroundSlider/BackgroundSlider";
import aboutData from "../../../data/aboutData";
import "./AboutUsBackgroundSlider.scss";
import CtaSection from "./AboutCta/CtaSection";

const AboutUsBackgroundSlider = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  const [sliderHeight, setSliderHeight] = useState(
    Math.round(window.innerHeight * (window.innerHeight > window.innerWidth ? 0.6 : 0.9))
  );

  useEffect(() => {
    const handleResize = () => {
      const portrait = window.innerHeight > window.innerWidth;
      setIsPortrait(portrait);
      // Обновляем высоту только если ориентация изменилась
      setSliderHeight(Math.round(window.innerHeight * (portrait ? 0.6 : 0.9)));
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
      {/* Контекст */}
      <CtaSection />

      {/* Слайдер */}
      <BackgroundSlider
        images={images}
        interval={5000}
        transition={2000}
        blur={1}
        scale={1.1}
        height={`${sliderHeight}px`} // фиксированная высота
        width="100%"
        className="aboutus-slider"
      />
    </section>
  );
};

export default AboutUsBackgroundSlider;