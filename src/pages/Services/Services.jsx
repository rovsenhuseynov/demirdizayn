// Лучшая версия

// import React, { useEffect, useState } from "react";
// import "./Services.scss";
// import Splitting from "splitting";
// import "splitting/dist/splitting.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// // Импортируем массив с карточками
// import { servicesPageData } from "../../data/ServicesPage";

// const Services = () => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (mounted) {
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
//           1200: { slidesPerView: 2 },
//         }}
//       >
//         {servicesPageData.map((card, index) => (
//           <SwiperSlide key={index}>
//             <div className="swiper-card-wrapper">
//               <div className="services-card" tabIndex="0">
//                 <img src={card.image} alt={card.title} />
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

// // Импортируем массив с карточками
// import { servicesPageData } from "../../data/ServicesPage";

// const Services = () => {
//   const [mounted, setMounted] = useState(false);

//   // Массив булевых значений для состояния активности каждой карточки. Если количество карточек изменится (новые данные) — состояние синхронизируется автоматически ✅
//   const [activeStates, setActiveStates] = useState(() =>
//     servicesPageData.map(() => false)
//   );

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (mounted) {
//       Splitting();
//     }
//   }, [mounted]);

//   const toggleActive = (index, e) => {
//     if (e && e.stopPropagation) e.stopPropagation();

//     // Переключаем текущую карточку, а все остальные сбрасываем в false
//     setActiveStates((prev) => prev.map((v, i) => (i === index ? !v : false)));
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       toggleActive(index, e);
//     }
//   };

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
//         {servicesPageData.map((card, index) => (
//           <SwiperSlide key={index}>
//             <div className="swiper-card-wrapper">
//               <div
//                 className={`services-card ${
//                   activeStates[index] ? "is-active" : ""
//                 }`}
//                 tabIndex="0"
//                 role="button"
//                 aria-pressed={activeStates[index]}
//                 onClick={(e) => toggleActive(index, e)}
//                 onKeyDown={(e) => handleKeyDown(index, e)}
//               >
//                 <img src={card.image} alt={card.title} />
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

// // Импортируем массив с карточками
// import { servicesPageData } from "../../data/ServicesPage";

// const Services = () => {
//   const [mounted, setMounted] = useState(false);

//   // Массив булевых значений для состояния активности каждой карточки. 
//   // Если количество карточек изменится — состояние синхронизируется автоматически
//   const [activeStates, setActiveStates] = useState(() =>
//     servicesPageData.map(() => false)
//   );

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (mounted) {
//       Splitting();
//     }
//   }, [mounted]);

//   const toggleActive = (index, e) => {
//     if (e && e.stopPropagation) e.stopPropagation();

//     // Переключаем текущую карточку, а все остальные сбрасываем в false
//     setActiveStates((prev) => prev.map((v, i) => (i === index ? !v : false)));
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       toggleActive(index, e);
//     }
//   };

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
//         {servicesPageData.map((card, index) => (
//           <SwiperSlide key={index}>
//             <div className="swiper-card-wrapper">
//               <div
//                 className={`services-card ${activeStates[index] ? "is-active" : ""}`}
//                 tabIndex="0"
//                 role="button"
//                 aria-pressed={activeStates[index]}
//                 onClick={(e) => toggleActive(index, e)}
//                 onKeyDown={(e) => handleKeyDown(index, e)}
//               >
//                 {/* Плавающая буква i в правом верхнем углу */}
//                 <span className="services-info">i</span>

//                 <img src={card.image} alt={card.title} />
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

// import { servicesPageData } from "../../data/ServicesPage";

// const Services = () => {
//   const [mounted, setMounted] = useState(false);
//   const [activeStates, setActiveStates] = useState(() =>
//     servicesPageData.map(() => false)
//   );

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (mounted) Splitting();
//   }, [mounted]);

//   const toggleActive = (index, e) => {
//     if (e && e.stopPropagation) e.stopPropagation();
//     setActiveStates(prev => prev.map((v, i) => (i === index ? !v : false)));
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       toggleActive(index, e);
//     }
//   };

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
//         {servicesPageData.map((card, index) => (
//           <SwiperSlide key={index}>
//             <div className="swiper-card-wrapper">
//               <div
//                 className={`services-card ${activeStates[index] ? "is-active" : ""}`}
//                 tabIndex="0"
//                 role="button"
//                 aria-pressed={activeStates[index]}
//                 onClick={(e) => toggleActive(index, e)}
//                 onKeyDown={(e) => handleKeyDown(index, e)}
//               >
//                 {/* Плавающая буква i видна только если карточка не активна */}
//                 {!activeStates[index] && <span className="services-info">i</span>}

//                 <img src={card.image} alt={card.title} />
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

// import { servicesPageData } from "../../data/ServicesPage";

// const Services = () => {
//   const [mounted, setMounted] = useState(false);
//   const [activeStates, setActiveStates] = useState(() =>
//     servicesPageData.map(() => false)
//   );

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (mounted) Splitting();
//   }, [mounted]);

//   const toggleActive = (index, e) => {
//     if (e && e.stopPropagation) e.stopPropagation();
//     setActiveStates(prev => prev.map((v, i) => (i === index ? !v : false)));
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       toggleActive(index, e);
//     }
//   };

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
//         {servicesPageData.map((card, index) => (
//           <SwiperSlide key={index}>
//             <div className="swiper-card-wrapper">
//               <div
//                 className={`services-card ${activeStates[index] ? "is-active" : ""}`}
//                 tabIndex="0"
//                 role="button"
//                 aria-pressed={activeStates[index]}
//                 onClick={(e) => toggleActive(index, e)}
//                 onKeyDown={(e) => handleKeyDown(index, e)}
//               >
//                 {/* Подсказка i видна только если карточка не активна */}
//                 {!activeStates[index] && <span className="services-info">i</span>}

//                 <img src={card.image} alt={card.title} />
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

import { servicesPageData } from "../../data/ServicesPage";

const Services = () => {
  const [mounted, setMounted] = useState(false);
  const [activeStates, setActiveStates] = useState(() =>
    servicesPageData.map(() => false)
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) Splitting();
  }, [mounted]);

  const toggleActive = (index, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setActiveStates(prev => prev.map((v, i) => (i === index ? !v : false)));
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleActive(index, e);
    }
  };

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
              <div
                className={`services-card ${activeStates[index] ? "is-active" : ""}`}
                tabIndex="0"
                role="button"
                aria-pressed={activeStates[index]}
                onClick={(e) => toggleActive(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              >
                {!activeStates[index] && <span className="services-info">i</span>}
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