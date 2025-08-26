// import "./AboutUs.scss";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect, useState, useMemo } from "react";
// import aboutData from "../../data/aboutData";

// const AboutUs = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   // Отслеживаем ширину экрана
//   useEffect(() => {
//     const mql = window.matchMedia("(max-width: 768px)");
//     const apply = () => setIsMobile(mql.matches);
//     apply();
//     mql.addEventListener("change", apply);
//     return () => mql.removeEventListener("change", apply);
//   }, []);

//   // Инициализация AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 50,
//       disable: isMobile ? "mobile" : false,
//     });
//     AOS.refresh();
//   }, [isMobile]);

//   // Выбор анимации для блока split в зависимости от устройства
//   const fadeLeft = useMemo(
//     () => (isMobile ? "fade-up" : "fade-left"),
//     [isMobile]
//   );
//   const fadeRight = useMemo(
//     () => (isMobile ? "fade-up" : "fade-right"),
//     [isMobile]
//   );

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

// import "./AboutUs.scss";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect, useState, useMemo } from "react";
// import aboutData from "../../data/aboutData";

// const AboutUs = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   // Отслеживаем ширину экрана
//   useEffect(() => {
//     const mql = window.matchMedia("(max-width: 768px)");
//     const apply = () => setIsMobile(mql.matches);
//     apply();
//     mql.addEventListener("change", apply);
//     return () => mql.removeEventListener("change", apply);
//   }, []);

//   // Инициализация AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 50,
//       disable: isMobile ? "mobile" : false,
//     });
//     AOS.refresh();
//   }, [isMobile]);

//   // Выбор анимации для блока split в зависимости от устройства
//   const fadeLeft = useMemo(
//     () => (isMobile ? "fade-up" : "fade-left"),
//     [isMobile]
//   );
//   const fadeRight = useMemo(
//     () => (isMobile ? "fade-up" : "fade-right"),
//     [isMobile]
//   );

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

//       {/* Gallery */}
//       <div className="about__gallery">
//         <h2 data-aos="fade-up">Наши работы</h2>
//         <div className="about__grid">
//           {[
//             {
//               src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", // Loft table
//               text: "Лофт-стол из металла и дерева",
//             },
//             {
//               src: "https://images.unsplash.com/photo-1623874035544-6fef8a2b4a27", // Welding
//               text: "Сварочные работы",
//             },
//             {
//               src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", // Loft chair
//               text: "Стул в стиле Loft",
//             },
//             {
//               src: "https://images.unsplash.com/photo-1616628182507-3f8f62e6a0e5", // Loft partition
//               text: "Металлическая перегородка Loft",
//             },
//           ].map((item, i) => (
//             <div
//               className="about__item"
//               key={i}
//               data-aos="zoom-in"
//               data-aos-delay={i * 150}
//             >
//               <div className="about__image-wrapper">
//                 <img src={item.src} alt={item.text} />
//                 <div className="about__overlay">
//                   <p>{item.text}</p>
//                   <span className="about__icon">🔍</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

// import "./AboutUs.scss";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect, useState, useMemo } from "react";
// import aboutData from "../../data/aboutData";
// import AboutGallery from "./AboutGallery/AboutGallery";

// const AboutUs = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   // const [lightboxActive, setLightboxActive] = useState(null); // для попапа

//   // Отслеживаем ширину экрана
//   useEffect(() => {
//     const mql = window.matchMedia("(max-width: 768px)");
//     const apply = () => setIsMobile(mql.matches);
//     apply();
//     mql.addEventListener("change", apply);
//     return () => mql.removeEventListener("change", apply);
//   }, []);

//   // Инициализация AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 50,
//       disable: isMobile ? "mobile" : false,
//     });
//     AOS.refresh();
//   }, [isMobile]);

//   const fadeLeft = useMemo(
//     () => (isMobile ? "fade-up" : "fade-left"),
//     [isMobile]
//   );
//   const fadeRight = useMemo(
//     () => (isMobile ? "fade-up" : "fade-right"),
//     [isMobile]
//   );

//   // const galleryItems = [
//   //   {
//   //     src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//   //     text: "Лофт-стол из металла и дерева",
//   //   },
//   //   {
//   //     src: "https://images.unsplash.com/photo-1623874035544-6fef8a2b4a27",
//   //     text: "Сварочные работы",
//   //   },
//   //   {
//   //     src: "https://images.unsplash.com/photo-1505691938895-8f358a7a47b2",
//   //     text: "Стул в стиле Loft",
//   //   },
//   //   {
//   //     src: "https://images.unsplash.com/photo-1616628182507-3f8f62e6a0e5",
//   //     text: "Металлическая перегородка Loft",
//   //   },
//   // ];

//   // const openLightbox = (index) => setLightboxActive(index);
//   // const closeLightbox = () => setLightboxActive(null);

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

//       {/* Gallery */}

//       {/* <div className="about__gallery">
//         <h2 data-aos="fade-up">Наши работы</h2>
//         <div className="about__grid">
//           {galleryItems.map((item, i) => (
//             <div
//               className="about__item"
//               key={i}
//               data-aos="zoom-in"
//               data-aos-delay={i * 150}
//             >
//               <div
//                 className="about__image-wrapper"
//                 onClick={() => openLightbox(i)}
//               >
//                 <img src={item.src} alt={item.text} />
//                 <div className="about__overlay">
//                   <p>{item.text}</p>
//                   <span className="about__icon">🔍</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div> */}

//         {/* Lightbox */}
//         {/* {lightboxActive !== null && (
//           <div className="about__lightbox" onClick={closeLightbox}>
//             <div
//               className="about__lightbox-content"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <img
//                 src={galleryItems[lightboxActive].src}
//                 alt={galleryItems[lightboxActive].text}
//               />
//               <p>{galleryItems[lightboxActive].text}</p>
//               <button className="about__lightbox-close" onClick={closeLightbox}>
//                 ✖
//               </button>
//             </div>
//           </div>
//         )}
//       </div> */}
//       <AboutGallery items={galleryItems} />
//     </section>
//   );
// };

// export default AboutUs;




import "./AboutUs.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useMemo } from "react";
import aboutData from "../../data/aboutData";
import AboutGallery from "./AboutGallery/AboutGallery";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const apply = () => setIsMobile(mql.matches);
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      disable: isMobile ? "mobile" : false,
    });
    AOS.refresh();
  }, [isMobile]);

  const fadeLeft = useMemo(() => (isMobile ? "fade-up" : "fade-left"), [isMobile]);
  const fadeRight = useMemo(() => (isMobile ? "fade-up" : "fade-right"), [isMobile]);

  return (
    <section className="about">
      <h1 className="about__title" data-aos="fade-up">
        {aboutData.hero.title}
      </h1>

      <section className="about__hero">
        <div className="about__overlay">
          <p data-aos="fade-up" data-aos-delay="200">
            {aboutData.hero.overlayText}
          </p>
        </div>
      </section>

      <div className="about__split">
        <section className="about__split-left" data-aos={fadeRight}>
          <h2 className="about__split-title">{aboutData.ourWork.title}</h2>
          {aboutData.ourWork.text.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <div className="about__split-image">
            <img src={aboutData.ourWork.image} alt="Missiya" />
          </div>
        </section>

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

      {/* передаём именно массив */}
      <AboutGallery items={aboutData.galleryItems} />
    </section>
  );
};

export default AboutUs;