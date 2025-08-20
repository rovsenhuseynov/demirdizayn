// import  "./AboutUs.scss"

// const AboutUs = () => {
//   return (
//     <div>Gücümüz — hər detalı incəliklə gözdən keçirməkdir.</div>
//   )
// }

// export default AboutUs






// import "./AboutUs.scss";

// const AboutUs = () => {
//   return (
//     <section className="about">
//       <div className="about__container">
//         <h1 className="about__title">О нас</h1>
//         <p className="about__subtitle">
//           Gücümüz — hər detalı incəliklə gözdən keçirməkdir.
//         </p>

//         <div className="about__block">
//           <h2 className="about__heading">Наша история</h2>
//           <p>
//             Мы начинали как небольшая мастерская, вдохновлённая идеей объединить
//             эстетику и практичность. Сегодня мы предлагаем широкий спектр
//             интерьерных решений, сохраняя главное — внимание к деталям и
//             индивидуальный подход.
//           </p>
//         </div>

//         <div className="about__block">
//           <h2 className="about__heading">Миссия и ценности</h2>
//           <p>
//             Наша миссия — создавать уют и красоту в каждом доме. Мы верим, что
//             гармония складывается из мелочей, и именно поэтому уделяем внимание
//             каждой детали.
//           </p>
//           <ul className="about__list">
//             <li>✔ Качество без компромиссов</li>
//             <li>✔ Индивидуальный подход</li>
//             <li>✔ Честность и доверие</li>
//             <li>✔ Эстетика и функциональность</li>
//           </ul>
//         </div>

//         <div className="about__block">
//           <h2 className="about__heading">Почему выбирают нас</h2>
//           <p>
//             Мы не просто создаём изделия, а воплощаем атмосферу. Наши клиенты
//             выбирают нас за надёжность, современный взгляд и умение объединять
//             традиции с инновациями.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;






// import "./AboutUs.scss";

// const AboutUs = () => {
//   return (
//     <section className="about">
//       {/* Hero */}
//       <div className="about__hero">
//         <div className="about__overlay">
//           <h1 className="about__title">О нас</h1>
//           <p className="about__subtitle">
//             Gücümüz — hər detalı incəliklə gözdən keçirməkdir.
//           </p>
//         </div>
//       </div>

//       {/* Company */}
//       <div className="about__company">
//         <div className="about__text">
//           <h2>Наша история</h2>
//           <p>
//             Мы начинали как небольшая мастерская, вдохновлённая желанием
//             объединить эстетику и практичность. Сегодня мы предлагаем
//             интерьерные решения, сохраняя главное — внимание к деталям и
//             индивидуальный подход.
//           </p>
//         </div>
//         <div className="about__image">
//           <img
//             src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
//             alt="Команда"
//           />
//         </div>
//       </div>

//       {/* Values */}
//       <div className="about__values">
//         <h2>Наши ценности</h2>
//         <div className="about__cards">
//           <div className="about__card">
//             <img
//               src="https://img.icons8.com/ios-filled/100/000000/quality.png"
//               alt="Качество"
//             />
//             <h3>Качество</h3>
//             <p>Материалы и работа без компромиссов.</p>
//           </div>
//           <div className="about__card">
//             <img
//               src="https://img.icons8.com/ios-filled/100/000000/idea.png"
//               alt="Индивидуальность"
//             />
//             <h3>Индивидуальность</h3>
//             <p>Каждый проект отражает характер заказчика.</p>
//           </div>
//           <div className="about__card">
//             <img
//               src="https://img.icons8.com/ios-filled/100/000000/handshake.png"
//               alt="Честность"
//             />
//             <h3>Честность</h3>
//             <p>Открытость и доверие на каждом этапе.</p>
//           </div>
//         </div>
//       </div>

//       {/* Gallery */}
//       <div className="about__gallery">
//         <h2>Наши проекты</h2>
//         <div className="about__grid">
//           <img src="https://source.unsplash.com/600x400/?interior,1" alt="Project1" />
//           <img src="https://source.unsplash.com/600x400/?interior,2" alt="Project2" />
//           <img src="https://source.unsplash.com/600x400/?interior,3" alt="Project3" />
//           <img src="https://source.unsplash.com/600x400/?interior,4" alt="Project4" />
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="about__cta">
//         <h2>Хотите сотрудничать с нами?</h2>
//         <p>Свяжитесь с нами и создайте уют вместе с нами.</p>
//         <button className="about__btn">Связаться</button>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;







// import "./AboutUs.scss";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const AboutUs = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section className="about">
//       <h1 className="about__title" data-aos="fade-up">Haqqımızda</h1>
//       {/* Hero */}
//       <div className="about__hero">
//         <div className="about__overlay">
//           <p data-aos="fade-up" data-aos-delay="200">
//             Gücümüz — hər detalı incəliklə gözdən keçirməkdir.
//           </p>
//         </div>
//       </div>

//       {/* Company (Şirkət) */}
//       <div className="about__company">
//         <div className="about__text" data-aos="fade-right">
//           <h2>Наша история</h2>
//           <p>
//             Мы начинали как небольшая мастерская, вдохновлённая желанием
//             объединить эстетику и практичность. Сегодня мы предлагаем
//             интерьерные решения, сохраняя главное — внимание к деталям и
//             индивидуальный подход.
//           </p>
//         </div>
//         <div className="about__image" data-aos="fade-left">
//           <img
//             src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
//             alt="Команда"
//           />
//         </div>
//       </div>

//       {/* Values */}
//       <div className="about__values">
//         <h2 data-aos="fade-up">Наши ценности</h2>
//         <div className="about__cards">
//           <div className="about__card" data-aos="zoom-in" data-aos-delay="100">
//             <img
//               src="https://img.icons8.com/ios-filled/100/4CAF50/quality.png"
//               alt="Качество"
//             />
//             <h3>Качество</h3>
//             <p>Материалы и работа без компромиссов.</p>
//           </div>
//           <div className="about__card" data-aos="zoom-in" data-aos-delay="200">
//             <img
//               src="https://img.icons8.com/ios-filled/100/2196F3/idea.png"
//               alt="Индивидуальность"
//             />
//             <h3>Индивидуальность</h3>
//             <p>Каждый проект отражает характер заказчика.</p>
//           </div>
//           <div className="about__card" data-aos="zoom-in" data-aos-delay="300">
//             <img
//               src="https://img.icons8.com/ios-filled/100/FF9800/handshake.png"
//               alt="Честность"
//             />
//             <h3>Честность</h3>
//             <p>Открытость и доверие на каждом этапе.</p>
//           </div>
//         </div>
//       </div>

//       {/* Gallery */}
//       <div className="about__gallery">
//         <h2 data-aos="fade-up">Наши проекты</h2>
//         <div className="about__grid">
//           <div className="about__item" data-aos="zoom-in">
//             <img
//               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//               alt="Project1"
//             />
//             <div className="about__overlay-text">Современный интерьер</div>
//           </div>
//           <div className="about__item" data-aos="zoom-in" data-aos-delay="100">
//             <img
//               src="https://images.unsplash.com/photo-1586105251261-72a756497a12"
//               alt="Project2"
//             />
//             <div className="about__overlay-text">Скандинавский стиль</div>
//           </div>
//           <div className="about__item" data-aos="zoom-in" data-aos-delay="200">
//             <img
//               src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2"
//               alt="Project3"
//             />
//             <div className="about__overlay-text">Уют и дерево</div>
//           </div>
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="about__cta">
//         <div className="about__cta-inner" data-aos="fade-up">
//           <h2>Хотите сотрудничать с нами?</h2>
//           <p>Свяжитесь с нами и создайте уют вместе с нами.</p>
//           <button className="about__btn">Связаться</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;






import "./AboutUs.scss";
import { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Отслеживаем ширину экрана, чтобы на мобилках убрать горизонтальные сдвиги
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const apply = () => setIsMobile(mql.matches);
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, [isMobile]);

  // На мобильных заменяем fade-left/right на fade-up (вертикально, без «выпирания»)
  const fadeLeft = useMemo(() => (isMobile ? "fade-up" : "fade-left"), [isMobile]);
  const fadeRight = useMemo(() => (isMobile ? "fade-up" : "fade-right"), [isMobile]);

  return (
    <section className="about">
      <h1 className="about__title" data-aos="fade-up">Haqqımızda</h1>

      {/* Hero */}
      <div className="about__hero">
        <div className="about__overlay">
          <p data-aos="fade-up" data-aos-delay="200">
            Gücümüz — hər detalı incəliklə gözdən keçirməkdir.
          </p>
        </div>
      </div>

      {/* Company (Şirkət) */}
      <div className="about__company">
        <div className="about__text" data-aos={fadeRight}>
          <h2>Наша история</h2>
          <p>
            Мы начинали как небольшая мастерская, вдохновлённая желанием
            объединить эстетику и практичность. Сегодня мы предлагаем
            интерьерные решения, сохраняя главное — внимание к деталям и
            индивидуальный подход.
          </p>
        </div>
        <div className="about__image" data-aos={fadeLeft}>
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="Команда"
          />
        </div>
      </div>

      {/* Values */}
      <div className="about__values">
        <h2 data-aos="fade-up">Наши ценности</h2>
        <div className="about__cards">
          <div className="about__card" data-aos="zoom-in" data-aos-delay="100">
            <img
              src="https://img.icons8.com/ios-filled/100/4CAF50/quality.png"
              alt="Качество"
            />
            <h3>Качество</h3>
            <p>Материалы и работа без компромиссов.</p>
          </div>
          <div className="about__card" data-aos="zoom-in" data-aos-delay="200">
            <img
              src="https://img.icons8.com/ios-filled/100/2196F3/idea.png"
              alt="Индивидуальность"
            />
            <h3>Индивидуальность</h3>
            <p>Каждый проект отражает характер заказчика.</p>
          </div>
          <div className="about__card" data-aos="zoom-in" data-aos-delay="300">
            <img
              src="https://img.icons8.com/ios-filled/100/FF9800/handshake.png"
              alt="Честность"
            />
            <h3>Честность</h3>
            <p>Открытость и доверие на каждом этапе.</p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="about__gallery">
        <h2 data-aos="fade-up">Наши проекты</h2>
        <div className="about__grid">
          <div className="about__item" data-aos="zoom-in">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Project1"
            />
            <div className="about__overlay-text">Современный интерьер</div>
          </div>
          <div className="about__item" data-aos="zoom-in" data-aos-delay="100">
            <img
              src="https://images.unsplash.com/photo-1586105251261-72a756497a12"
              alt="Project2"
            />
            <div className="about__overlay-text">Скандинавский стиль</div>
          </div>
          <div className="about__item" data-aos="zoom-in" data-aos-delay="200">
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2"
              alt="Project3"
            />
            <div className="about__overlay-text">Уют и дерево</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="about__cta">
        <div className="about__cta-inner" data-aos="fade-up">
          <h2>Хотите сотрудничать с нами?</h2>
          <p>Свяжитесь с нами и создайте уют вместе с нами.</p>
          <button className="about__btn">Связаться</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;