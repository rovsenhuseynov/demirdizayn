// import { useState } from "react";
// import "./Services.scss";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// import { servicesPageData } from "../../data/ServicesPage";

// const Services = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleClick = (index) => {
//     setActiveIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <section className="services">

//       <Swiper
//         modules={[Navigation]}
//         navigation
//         spaceBetween={20}
//         slidesPerView={2}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1200: { slidesPerView: 2 },
//         }}
//       >
//         {servicesPageData.map((service, i) => (
//           <SwiperSlide key={i}>
//             <div className="fancy">
//               <div className="fancy-inner" onClick={() => handleClick(i)}>
//                 <img src={service.image} alt={service.title} />
//                 <div className="hint-icon">ℹ</div>
//                 <div className={`behind ${activeIndex === i ? "active" : ""}`}>
//                   <div className="behind-text">
//                     <h3>{service.title}</h3>
//                     <p>{service.text}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Services;



// import React, { useEffect } from "react";
// import "./Services.scss";
// import Splitting from "splitting";
// import "splitting/dist/splitting.css";

// const cardsData = [
//   {
//     title: "The City",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi nostrum necessitatibus doloremque? Quasi non molestias odio. Quasi non molestias odio.",
//     img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     title: "The Beach",
//     text: "Quasi non molestias odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi nostrum necessitatibus doloremque? Quasi non molestias odio.",
//     img: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
//   },
// ];

// const Services = () => {
//   useEffect(() => {
//     Splitting();

//     setTimeout(() => {
//       const firstCard = document.querySelector(".services-card");
//       if (firstCard) firstCard.focus();
//     }, 1500);
//   }, []);

//   return (
//     <div className="services-wrapper">
//       <h1 className="services-title">Card Split Hovers</h1>
//       <div className="services-grid">
//         {cardsData.map((card, index) => (
//           <div key={index} className="services-card" tabIndex="0">
//             <img src={card.img} alt={card.title} />
//             <div className="services-text">
//               <h2 data-splitting="">{card.title}</h2>
//               <p data-splitting="">{card.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;




// // Services.jsx
// import React, { useEffect } from "react";
// import "./Services.scss";
// import Splitting from "splitting";
// import "splitting/dist/splitting.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const cardsData = [
//   {
//     title: "The City",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
//     img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     title: "The Beach",
//     text: "Quasi non molestias odio. Lorem ipsum dolor sit amet...",
//     img: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     title: "The Mountains",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
//     img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     title: "The Forest",
//     text: "Quasi non molestias odio. Lorem ipsum dolor sit amet...",
//     img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     title: "The Desert",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
//     img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     title: "The Lake",
//     text: "Quasi non molestias odio. Lorem ipsum dolor sit amet...",
//     img: "https://images.unsplash.com/photo-1519817650390-64a93db511aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
//   },
// ];

// const Services = () => {
//   useEffect(() => {
//     Splitting();
//     setTimeout(() => {
//       const firstCard = document.querySelector(".services-card");
//       if (firstCard) firstCard.focus();
//     }, 1500);
//   }, []);

//   return (
//     <div className="services-wrapper">
//       <h1 className="services-title">Card Split Hovers</h1>

//       <Swiper
//         modules={[Navigation]}
//         navigation
//         spaceBetween={20}
//         slidesPerView={2}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1200: { slidesPerView: 2 },
//         }}
//       >
//         {cardsData.map((card, index) => (
//           <SwiperSlide key={index}>
//             <div className="swiper-card-wrapper">
//               <div className="services-card" tabIndex="0">
//                 <img src={card.img} alt={card.title} />
//                 <div className="services-text">
//                   <h2 data-splitting="">{card.title}</h2>
//                   <p data-splitting="">{card.text}</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Services;





// // Services.jsx
// import React, { useEffect, useRef } from "react";
// import "./Services.scss";
// import Splitting from "splitting";
// import "splitting/dist/splitting.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const cardsData = [
//   { title: "The City", text: "Lorem ipsum dolor sit amet consectetur...", img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?..." },
//   { title: "The Beach", text: "Quasi non molestias odio. Lorem ipsum...", img: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?..." },
//   { title: "The Mountains", text: "Lorem ipsum dolor sit amet consectetur...", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?..." },
//   { title: "The Forest", text: "Quasi non molestias odio. Lorem ipsum...", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?..." },
//   { title: "The Desert", text: "Lorem ipsum dolor sit amet consectetur...", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?..." },
//   { title: "The Lake", text: "Quasi non molestias odio. Lorem ipsum...", img: "https://images.unsplash.com/photo-1519817650390-64a93db511aa?..." },
// ];

// const Services = () => {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     // Применяем Splitting после небольшого таймаута,
//     // чтобы все слайды уже были в DOM
//     const timeout = setTimeout(() => {
//       Splitting();
//     }, 200);

//     // Фокус на первую карточку
//     const focusTimeout = setTimeout(() => {
//       const firstCard = document.querySelector(".services-card");
//       if (firstCard) firstCard.focus();
//     }, 500);

//     return () => {
//       clearTimeout(timeout);
//       clearTimeout(focusTimeout);
//     };
//   }, []);

//   return (
//     <div className="services-wrapper">
//       <h1 className="services-title">Card Split Hovers</h1>

//       <Swiper
//         ref={swiperRef}
//         modules={[Navigation]}
//         navigation
//         spaceBetween={20}
//         slidesPerView={2}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1200: { slidesPerView: 2 },
//         }}
//       >
//         {cardsData.map((card, index) => (
//           <SwiperSlide key={index}>
//             <div className="swiper-card-wrapper">
//               <div className="services-card" tabIndex="0">
//                 <img src={card.img} alt={card.title} />
//                 <div className="services-text">
//                   <h2 data-splitting="">{card.title}</h2>
//                   <p data-splitting="">{card.text}</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Services;  




// import React, { useEffect, useState } from "react";
// import "./Services.scss";
// import Splitting from "splitting";
// import "splitting/dist/splitting.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";






// const cardsData = [
//   { title: "The City", text: "Lorem ipsum dolor sit amet consectetur...", img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?..." },
//   { title: "The Beach", text: "Quasi non molestias odio. Lorem ipsum...", img: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?..." },
//   { title: "The Mountains", text: "Lorem ipsum dolor sit amet consectetur...", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?..." },
//   { title: "The Forest", text: "Quasi non molestias odio. Lorem ipsum...", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?..." },
//   { title: "The Desert", text: "Lorem ipsum dolor sit amet consectetur...", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?..." },
//   { title: "The Lake", text: "Quasi non molestias odio. Lorem ipsum...", img: "https://images.unsplash.com/photo-1519817650390-64a93db511aa?..." },
// ];


// const Services = () => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     // Ждём, пока компонент полностью смонтирован
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (mounted) {
//       // После полной отрисовки всех карточек вызываем Splitting.js
//       Splitting();
//     }
//   }, [mounted]);

//   return (
//     <div className="services-wrapper">
//       <h1 className="services-title">Card Split Hovers</h1>
//       <Swiper
//         modules={[Navigation]}
//         navigation
//         spaceBetween={20}
//         slidesPerView={2}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1200: { slidesPerView: 3 },
//         }}
//       >
//         {cardsData.map((card, index) => (
//           <SwiperSlide key={index}>
//             <div className="swiper-card-wrapper">
//               <div className="services-card" tabIndex="0">
//                 <img src={card.img} alt={card.title} />
//                 <div className="services-text">
//                   <h2 data-splitting="">{card.title}</h2>
//                   <p data-splitting="">{card.text}</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Services;




import React, { useEffect, useState } from "react";
import "./Services.scss";
import Splitting from "splitting";
import "splitting/dist/splitting.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Импортируем массив с карточками
import { servicesPageData } from "../../data/ServicesPage";

const Services = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      Splitting();
    }
  }, [mounted]);

  return (
    <div className="services-wrapper">
      <h1 className="services-title">Card Split Hovers</h1>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 2 },
        }}
      >
        {servicesPageData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-card-wrapper">
              <div className="services-card" tabIndex="0">
                <img src={card.image} alt={card.title} />
                <div className="services-text">
                  <h2 data-splitting="">{card.title}</h2>
                  <p data-splitting="">{card.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;