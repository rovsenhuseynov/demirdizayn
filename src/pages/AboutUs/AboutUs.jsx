// import "./AboutUs.scss";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect, useState, useMemo } from "react";
// import ImageAboutUs_1 from "../../assets/images/beginning.webp";

// const AboutUs = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   // Отслеживаем ширину экрана, чтобы на мобилках убрать горизонтальные сдвиги
//   useEffect(() => {
//     const mql = window.matchMedia("(max-width: 768px)");
//     const apply = () => setIsMobile(mql.matches);
//     apply();
//     mql.addEventListener("change", apply);
//     return () => mql.removeEventListener("change", apply);
//   }, []);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//     AOS.refresh();
//   }, [isMobile]);

//   // На мобильных заменяем fade-left/right на fade-up (вертикально, без «выпирания»)
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
//         Haqqımızda
//       </h1>

//       {/* section Hero */}
//       <section className="about__hero">
//         <div className="about__overlay">
//           <p data-aos="fade-up" data-aos-delay="200">
//             Gücümüz — hər detalı incəliklə gözdən keçirməkdir.
//           </p>
//         </div>
//       </section>

//       <div className="about__split">
//         {/* section Left side */}
//         <section className="about__split-left" data-aos={fadeRight}>
//           <h2 className="about__split-title">Bizim Missiyamız</h2>
//           <p>
//             Biz kiçik bir emalatxana kimi fəaliyyətə başladıq, hər bir sifarişə
//             fərdi yanaşma və detallara diqqət bizim əsas prinsiplərimiz oldu.
//           </p>
//           <p>
//             Yaradıcı yanaşma və dəqiqliklə, hər bir layihəni özünəməxsus və
//             dəyərli edirik.
//           </p>

//           <div className="about__split-image">
//             <img src={ImageAboutUs_1} alt="Missiya" />
//           </div>
//         </section>

//         {/* section Right side */}
//         <section className="about__split-right" data-aos={fadeLeft}>
//           <div className="about__card-vertical">
//             <img
//               className="about__card-image"
//               src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/deer-in-black-and-white-lukas-holas.jpg"
//               alt="icon"
//             />

//             <div>
//               <h3>Yaradıcılıq</h3>
//               <p>Hər detalda fərqlilik və estetik baxış.</p>
//             </div>
//           </div>

//           <div className="about__card-vertical">
//             <img
//               src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/portrait-of-common-buzzard-in-black-and-white-lukas-holas.jpg"
//               alt="icon"
//             />

//             <div>
//               <h3>Etibarlılıq</h3>
//               <p>Layihələrdə dəqiqlik və vaxtında icra.</p>
//             </div>
//           </div>

//           <div className="about__card-vertical">
//             <img
//               src="https://render.fineartamerica.com/images/rendered/square-dynamic/small/images-medium-large-5/bear-lukas-holas.jpg"
//               alt="icon"
//             />
//             <div>
//               <h3>Komanda Ruhu</h3>
//               <p>Birlikdə daha böyük uğurlar qazanırıq.</p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;




// import "./AboutUs.scss";
// import { useEffect, useState, useMemo } from "react";
// import ImageAboutUs_1 from "../../assets/images/beginning.webp";

// const AboutUs = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [aosLoaded, setAosLoaded] = useState(false);

//   // Отслеживаем ширину экрана, чтобы на мобилках отключить AOS
//   useEffect(() => {
//     const mql = window.matchMedia("(max-width: 768px)");
//     const apply = () => setIsMobile(mql.matches);
//     apply();
//     mql.addEventListener("change", apply);
//     return () => mql.removeEventListener("change", apply);
//   }, []);

//   // Динамически импортируем AOS только на десктопе
//   useEffect(() => {
//     if (!isMobile && !aosLoaded) {
//       import("aos").then((AOS) => {
//         import("aos/dist/aos.css");
//         AOS.init({ duration: 1000, once: true, offset: 50 });
//         setAosLoaded(true);
//       });
//     }
//   }, [isMobile, aosLoaded]);

//   // На мобильных заменяем fade-left/right на fade-up
//   const fadeLeft = useMemo(() => (isMobile ? "fade-up" : "fade-left"), [isMobile]);
//   const fadeRight = useMemo(() => (isMobile ? "fade-up" : "fade-right"), [isMobile]);

//   return (
//     <section className="about">
//       {/* section title */}
//       <h1 className="about__title" data-aos={isMobile ? undefined : "fade-up"}>
//         Haqqımızda
//       </h1>

//       {/* section Hero */}
//       <section className="about__hero">
//         <div className="about__overlay">
//           <p data-aos={isMobile ? undefined : "fade-up"} data-aos-delay="200">
//             Gücümüz — hər detalı incəliklə gözdən keçirməkdir.
//           </p>
//         </div>
//       </section>

//       <div className="about__split">
//         {/* section Left side */}
//         <section className="about__split-left" data-aos={isMobile ? undefined : fadeRight}>
//           <h2 className="about__split-title">Bizim Missiyamız</h2>
//           <p>
//             Biz kiçik bir emalatxana kimi fəaliyyətə başladıq, hər bir sifarişə fərdi
//             yanaşma və detallara diqqət bizim əsas prinsiplərimiz oldu.
//           </p>
//           <p>
//             Yaradıcı yanaşma və dəqiqliklə, hər bir layihəni özünəməxsus və dəyərli edirik.
//           </p>

//           <div className="about__split-image">
//             <img src={ImageAboutUs_1} alt="Missiya" />
//           </div>
//         </section>

//         {/* section Right side */}
//         <section className="about__split-right" data-aos={isMobile ? undefined : fadeLeft}>
//           <div className="about__card-vertical">
//             <img
//               className="about__card-image"
//               src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/deer-in-black-and-white-lukas-holas.jpg"
//               alt="icon"
//             />
//             <div>
//               <h3>Yaradıcılıq</h3>
//               <p>Hər detalda fərqlilik və estetik baxış.</p>
//             </div>
//           </div>

//           <div className="about__card-vertical">
//             <img
//               src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/portrait-of-common-buzzard-in-black-and-white-lukas-holas.jpg"
//               alt="icon"
//             />
//             <div>
//               <h3>Etibarlılıq</h3>
//               <p>Layihələrdə dəqiqlik və vaxtında icra.</p>
//             </div>
//           </div>

//           <div className="about__card-vertical">
//             <img
//               src="https://render.fineartamerica.com/images/rendered/square-dynamic/small/images-medium-large-5/bear-lukas-holas.jpg"
//               alt="icon"
//             />
//             <div>
//               <h3>Komanda Ruhu</h3>
//               <p>Birlikdə daha böyük uğurlar qazanırıq.</p>
//             </div>
//           </div>
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
import ImageAboutUs_1 from "../../assets/images/beginning.webp";

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
      disable: isMobile ? "mobile" : false, // отключаем трансформации на мобилках, элементы остаются видимыми
    });
    AOS.refresh();
  }, [isMobile]);

  // Выбор анимации для блока split
  const fadeLeft = useMemo(() => (isMobile ? "fade-left" : "fade-left"), [isMobile]);
  const fadeRight = useMemo(() => (isMobile ? "fade-right" : "fade-right"), [isMobile]);

  return (
    <section className="about">
      {/* section title */}
      <h1 className="about__title" data-aos="fade-up">
        Haqqımızda
      </h1>

      {/* section Hero */}
      <section className="about__hero">
        <div className="about__overlay">
          <p data-aos="fade-up" data-aos-delay="200">
            Gücümüz — hər detalı incəliklə gözdən keçirməkdir.
          </p>
        </div>
      </section>

      <div className="about__split">
        {/* section Left side */}
        <section className="about__split-left" data-aos={fadeRight}>
          <h2 className="about__split-title">Bizim Missiyamız</h2>
          <p>
            Biz kiçik bir emalatxana kimi fəaliyyətə başladıq, hər bir sifarişə
            fərdi yanaşma və detallara diqqət bizim əsas prinsiplərimiz oldu.
          </p>
          <p>
            Yaradıcı yanaşma və dəqiqliklə, hər bir layihəni özünəməxsus və
            dəyərli edirik.
          </p>

          <div className="about__split-image">
            <img src={ImageAboutUs_1} alt="Missiya" />
          </div>
        </section>

        {/* section Right side */}
        <section className="about__split-right" data-aos={fadeLeft}>
          <div className="about__card-vertical">
            <img
              className="about__card-image"
              src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/deer-in-black-and-white-lukas-holas.jpg"
              alt="icon"
            />
            <div>
              <h3>Yaradıcılıq</h3>
              <p>Hər detalda fərqlilik və estetik baxış.</p>
            </div>
          </div>

          <div className="about__card-vertical">
            <img
              src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/portrait-of-common-buzzard-in-black-and-white-lukas-holas.jpg"
              alt="icon"
            />
            <div>
              <h3>Etibarlılıq</h3>
              <p>Layihələrdə dəqiqlik və vaxtında icra.</p>
            </div>
          </div>

          <div className="about__card-vertical">
            <img
              src="https://render.fineartamerica.com/images/rendered/square-dynamic/small/images-medium-large-5/bear-lukas-holas.jpg"
              alt="icon"
            />
            <div>
              <h3>Komanda Ruhu</h3>
              <p>Birlikdə daha böyük uğurlar qazanırıq.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;