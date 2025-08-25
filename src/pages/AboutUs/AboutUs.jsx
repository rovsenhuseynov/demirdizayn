// import "./AboutUs.scss";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect, useState, useMemo } from "react";
// import aboutData from "../../data/aboutData";

// const AboutUs = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mql = window.matchMedia("(max-width: 768px)");
//     const apply = () => setIsMobile(mql.matches);
//     apply();
//     mql.addEventListener("change", apply);
//     return () => mql.removeEventListener("change", apply);
//   }, []);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 50,
//       disable: isMobile ? "mobile" : false,
//     });
//     AOS.refresh();
//   }, [isMobile]);

//   const fadeLeft = useMemo(() => "fade-left", [isMobile]);
//   const fadeRight = useMemo(() => "fade-right", [isMobile]);

//   return (
//     <section className="about">
//       {/* section title */}
//       <h1 className="about__title" data-aos="fade-up">
//         {aboutData.hero.title}
//       </h1>

//       {/* section Hero */}
//       <section className="about__hero">
//         <div className="about__overlay">
//           <p data-aos="fade-up" data-aos-delay="200">
//             {aboutData.hero.overlayText}
//           </p>
//         </div>
//       </section>

//       <div className="about__split">
//         {/* section Left side */}
//         <section className="about__split-left" data-aos={fadeRight}>
//           <h2 className="about__split-title">{aboutData.ourWork.title}</h2>
//           {aboutData.ourWork.text.map((paragraph, i) => (
//             <p key={i}>{paragraph}</p>
//           ))}

//           <div className="about__split-image">
//             <img src={aboutData.ourWork.image} alt="Missiya" />
//           </div>
//         </section>

//         {/* section Right side */}
//         <section className="about__split-right" data-aos={fadeLeft}>
//           {aboutData.cards.map((card, i) => (
//             <div className="about__card-vertical" key={i}>
//               <img className="about__card-image" src={card.icon} alt="icon" />
//               <div>
//                 <h3>{card.title}</h3>
//                 <p>{card.description}</p>
//               </div>
//             </div>
//           ))}
//         </section>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

import "./AboutUs.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useMemo } from "react";
import aboutData from "../../data/aboutData";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Отслеживаем ширину экрана
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const apply = () => setIsMobile(mql.matches);
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  // Инициализация AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      disable: isMobile ? "mobile" : false,
    });
    AOS.refresh();
  }, [isMobile]);

  // Выбор анимации для блока split в зависимости от устройства
  const fadeLeft = useMemo(
    () => (isMobile ? "fade-up" : "fade-left"),
    [isMobile]
  );
  const fadeRight = useMemo(
    () => (isMobile ? "fade-up" : "fade-right"),
    [isMobile]
  );

  return (
    <section className="about">
      {/* section title */}
      <h1 className="about__title" data-aos="fade-up">
        {aboutData.hero.title}
      </h1>

      {/* section Hero */}
      <section className="about__hero">
        <div className="about__overlay">
          <p data-aos="fade-up" data-aos-delay="200">
            {aboutData.hero.overlayText}
          </p>
        </div>
      </section>

      <div className="about__split">
        {/* section Left side */}
        <section className="about__split-left" data-aos={fadeRight}>
          <h2 className="about__split-title">{aboutData.ourWork.title}</h2>
          {aboutData.ourWork.text.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          <div className="about__split-image">
            <img src={aboutData.ourWork.image} alt="Missiya" />
          </div>
        </section>

        {/* section Right side */}
        <section className="about__split-right" data-aos={fadeLeft}>
          {aboutData.cards.map((card, i) => (
            <div className="about__card-vertical" key={i}>
              <img className="about__card-image" src={card.icon} alt="icon" />
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
