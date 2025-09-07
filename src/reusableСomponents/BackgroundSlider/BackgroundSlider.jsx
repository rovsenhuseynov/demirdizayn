// import { useEffect, useState } from "react";
// import "./BackgroundSlider.scss";

// const BackgroundSlider = ({
//   images = [],
//   interval = 5000,
//   transition = 1500,
//   blur = 5,
//   scale = 1.05,
//   overlay = null,
//   className = "",
//   heightPercent = 75, // высота слайдера в процентах экрана
//   width = "100%",
// }) => {
//   const [index, setIndex] = useState(0);
//   const [sliderHeight, setSliderHeight] = useState(0);

//   useEffect(() => {
//     const updateHeight = () => {
//       setSliderHeight(window.innerHeight * (heightPercent / 100));
//     };
//     updateHeight(); // вычисляем сразу
//     window.addEventListener("resize", updateHeight);
//     return () => window.removeEventListener("resize", updateHeight);
//   }, [heightPercent]);

//   useEffect(() => {
//     if (!images || images.length <= 1) return;
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, interval);
//     return () => clearInterval(timer);
//   }, [images, interval]);

//   return (
//     <div
//       className={`bg-slider ${className}`}
//       style={{
//         height: sliderHeight,
//         width,
//         position: "relative",
//         overflow: "hidden",
//         margin: "0 auto",
//       }}
//     >
//       {images.map((img, i) => {
//         const isActive = i === index;
//         return (
//           <div key={i} className="bg-slide">
//             <div
//               className="bg-slide-inner"
//               style={{
//                 backgroundImage: `url(${img})`,
//                 opacity: isActive ? 1 : 0,
//                 transform: isActive
//                   ? "scale(1) translateY(0)"
//                   : `scale(${scale}) translateY(5%)`,
//                 filter: isActive ? "blur(0px)" : `blur(${blur}px)`,
//                 transition: `opacity ${transition}ms ease-in-out,
//                              transform ${transition}ms ease-in-out,
//                              filter ${transition}ms ease-in-out`,
//               }}
//             />
//           </div>
//         );
//       })}

//       {overlay && <div className="bg-slider__overlay">{overlay}</div>}
//     </div>
//   );
// };

// export default BackgroundSlider;





// import { useEffect, useState } from "react";
// import "./BackgroundSlider.scss";

// const BackgroundSlider = ({
//   images = [],
//   interval = 5000,
//   transition = 1500,
//   blur = 5,
//   scale = 1.05,
//   overlay = null,
//   className = "",
//   heightPercent = 75, // высота слайдера в процентах экрана
//   width = "100%",
// }) => {
//   const [index, setIndex] = useState(0);
//   const [sliderHeight, setSliderHeight] = useState(
//     Math.round(window.innerHeight * (heightPercent / 100))
//   );

//   useEffect(() => {
//     const handleResize = () => {
//       // Пересчитываем только при смене ориентации, а не при каждом изменении innerHeight
//       const { innerWidth, innerHeight } = window;
//       const isPortrait = innerHeight > innerWidth;
//       setSliderHeight(Math.round(innerHeight * (heightPercent / 100)));

//       // Если хотите ещё надёжнее — можно добавить debounce на resize
//     };

//     window.addEventListener("orientationchange", handleResize);
//     return () => window.removeEventListener("orientationchange", handleResize);
//   }, [heightPercent]);

//   useEffect(() => {
//     if (!images || images.length <= 1) return;
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, interval);
//     return () => clearInterval(timer);
//   }, [images, interval]);

//   return (
//     <div
//       className={`bg-slider ${className}`}
//       style={{
//         height: `${sliderHeight}px`, // фиксированная высота
//         width,
//         position: "relative",
//         overflow: "hidden",
//         margin: "0 auto",
//       }}
//     >
//       {images.map((img, i) => {
//         const isActive = i === index;
//         return (
//           <div key={i} className="bg-slide">
//             <div
//               className="bg-slide-inner"
//               style={{
//                 backgroundImage: `url(${img})`,
//                 opacity: isActive ? 1 : 0,
//                 transform: isActive
//                   ? "scale(1) translateY(0)"
//                   : `scale(${scale}) translateY(5%)`,
//                 filter: isActive ? "blur(0px)" : `blur(${blur}px)`,
//                 transition: `opacity ${transition}ms ease-in-out,
//                              transform ${transition}ms ease-in-out,
//                              filter ${transition}ms ease-in-out`,
//               }}
//             />
//           </div>
//         );
//       })}

//       {overlay && <div className="bg-slider__overlay">{overlay}</div>}
//     </div>
//   );
// };

// export default BackgroundSlider;




// import { useEffect, useState } from "react";
// import "./BackgroundSlider.scss";

// const BackgroundSlider = ({
//   images = [],
//   interval = 5000,
//   transition = 1500,
//   blur = 5,
//   scale = 1.05,
//   overlay = null,
//   className = "",
//   heightPercentPortrait = 75, // для портретной ориентации
//   heightPercentLandscape = 60, // для альбомной ориентации
//   width = "100%",
// }) => {
//   const [index, setIndex] = useState(0);
//   const [sliderHeight, setSliderHeight] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       const { innerWidth, innerHeight } = window;
//       const isPortrait = innerHeight > innerWidth;

//       const percent = isPortrait
//         ? heightPercentPortrait
//         : heightPercentLandscape;

//       setSliderHeight(Math.round(innerHeight * (percent / 100)));
//     };

//     // первый вызов
//     handleResize();

//     // слушаем только смену ориентации
//     window.addEventListener("orientationchange", handleResize);
//     return () =>
//       window.removeEventListener("orientationchange", handleResize);
//   }, [heightPercentPortrait, heightPercentLandscape]);

//   useEffect(() => {
//     if (!images || images.length <= 1) return;
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, interval);
//     return () => clearInterval(timer);
//   }, [images, interval]);

//   return (
//     <div
//       className={`bg-slider ${className}`}
//       style={{
//         height: `${sliderHeight}px`,
//         width,
//         position: "relative",
//         overflow: "hidden",
//         margin: "0 auto",
//       }}
//     >
//       {images.map((img, i) => {
//         const isActive = i === index;
//         return (
//           <div key={i} className="bg-slide">
//             <div
//               className="bg-slide-inner"
//               style={{
//                 backgroundImage: `url(${img})`,
//                 opacity: isActive ? 1 : 0,
//                 transform: isActive
//                   ? "scale(1) translateY(0)"
//                   : `scale(${scale}) translateY(5%)`,
//                 filter: isActive ? "blur(0px)" : `blur(${blur}px)`,
//                 transition: `opacity ${transition}ms ease-in-out,
//                              transform ${transition}ms ease-in-out,
//                              filter ${transition}ms ease-in-out`,
//               }}
//             />
//           </div>
//         );
//       })}

//       {overlay && <div className="bg-slider__overlay">{overlay}</div>}
//     </div>
//   );
// };

// export default BackgroundSlider; 







// BackgroundSlider.jsx
import { useEffect, useState } from "react";
import "./BackgroundSlider.scss";

const BackgroundSlider = ({
  images = [],
  interval = 5000,
  transition = 1500,
  blur = 5,
  scale = 1.05,
  overlay = null,
  className = "",
  heightPercentPortrait = 75, // высота в портретной ориентации
  heightPercentLandscape = 60, // высота в альбомной ориентации
  width = "100%",
}) => {
  const [index, setIndex] = useState(0);
  const [sliderHeight, setSliderHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const { innerWidth, innerHeight } = window;
      const isPortrait = innerHeight > innerWidth;
      const percent = isPortrait ? heightPercentPortrait : heightPercentLandscape;
      setSliderHeight(Math.round(innerHeight * (percent / 100)));
    };

    updateHeight(); // сразу считаем высоту
    window.addEventListener("orientationchange", updateHeight);
    return () => window.removeEventListener("orientationchange", updateHeight);
  }, [heightPercentPortrait, heightPercentLandscape]);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div
      className={`bg-slider ${className}`}
      style={{
        height: `${sliderHeight}px`,
        width,
        maxWidth: "100vw",
        position: "relative",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      {images.map((img, i) => {
        const isActive = i === index;
        return (
          <div key={i} className="bg-slide">
            <div
              className="bg-slide-inner"
              style={{
                backgroundImage: `url(${img})`,
                opacity: isActive ? 1 : 0,
                transform: isActive
                  ? "scale(1) translateY(0)"
                  : `scale(${scale}) translateY(5%)`,
                filter: isActive ? "blur(0px)" : `blur(${blur}px)`,
                transition: `opacity ${transition}ms ease-in-out,
                             transform ${transition}ms ease-in-out,
                             filter ${transition}ms ease-in-out`,
              }}
            />
          </div>
        );
      })}

      {overlay && <div className="bg-slider__overlay">{overlay}</div>}
    </div>
  );
};

export default BackgroundSlider;