// import  { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Products.scss";
// import Splitting from "splitting";
// import "splitting/dist/splitting.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// import { productsData } from "../../data/productsData";

// const Products = () => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (mounted) Splitting();
//   }, [mounted]);

//   return (
//     <div className="products-wrapper">
//       <h1 className="products-title">Изделия</h1>

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
//         {productsData.map((product, index) => (
//           <SwiperSlide key={index}>
//             <div className="swiper-card-wrapper">
//               <Link to={product.link} className="products-card">
//                 <img src={product.image} alt={product.title} />
//                 <div className="products-text">
//                   <h2 data-splitting="">{product.title}</h2>
//                   <p data-splitting="">{product.text}</p>
//                 </div>
//               </Link>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Products;




import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Products.scss";

import Splitting from "splitting";
import "splitting/dist/splitting.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { productsData } from "../../data/productsData"

const Products = () => {
  const swiperRef = useRef(null);

  const runSplitting = () => {
    // небольшой defer, чтобы DOM успел обновиться
    setTimeout(() => {
      Splitting();
    }, 0);
  };

  return (
    <div className="products-wrapper">
      <h1 className="products-title">Изделия</h1>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={2}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          runSplitting();
        }}
        onSlideChange={() => {
          runSplitting();
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 2 },
        }}
      >
        {productsData.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-card-wrapper">
              <Link to={product.link} className="products-card">
                <img src={product.image} alt={product.title} />
                <div className="products-text">
                  <h2 data-splitting="">{product.title}</h2>
                  <p data-splitting="">{product.text}</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;