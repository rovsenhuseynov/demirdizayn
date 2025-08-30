// import { useEffect, useState } from "react";
// import "./BackgroundSlider.scss";

// const BackgroundSlider = ({
//   images = [],
//   interval = 5000,
//   transition = 1500,
//   blur = 20,
//   scale = 1.05,
//   overlay = null,
//   className = "",
//   height = "70dvh", // ✅
//   width = "100%",
// }) => {
//   const [index, setIndex] = useState(0);

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
//         height, // ✅
//         width,
//         margin: width !== "100%" ? "0 auto" : undefined,
//         position: "relative",
//         // overflow: "hidden",
//       }}
//     >
//       {images.map((img, i) => (
//         <div
//           key={i}
//           className={`bg-slide ${i === index ? "active" : ""}`}
//           style={{
//             backgroundImage: `url(${img})`,
//             transition: `opacity ${transition}ms ease-in-out,
//                         filter ${transition}ms ease-in-out,
//                         transform ${transition}ms ease-in-out`,
//             filter: i === index ? "blur(0px)" : `blur(${blur}px)`,
//             transform: i === index ? "scale(1)" : `scale(${scale})`,
//             width: "100%",
//             height: "100%",
//             position: "absolute",
//             top: 0,
//             left: 0,
//           }}
//         />
//       ))}

//       {overlay && <div className="bg-slider__overlay">{overlay}</div>}
//     </div>
//   );
// };

// export default BackgroundSlider;

import { useEffect, useState } from "react";
import "./BackgroundSlider.scss";

const BackgroundSlider = ({
  images = [],
  interval = 5000,
  transition = 1500,
  blur = 20,
  scale = 1.05,
  overlay = null,
  className = "",
  height = "70dvh",
  width = "100%",
}) => {
  const [index, setIndex] = useState(0);

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
        height,
        width,
        margin: width !== "100%" ? "0 auto" : undefined,
        position: "relative",
      }}
    >
      {images.map((img, i) => (
        <div
          key={i}
          className={`bg-slide ${i === index ? "active" : ""}`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "contain", // показываем полностью
            backgroundRepeat: "no-repeat", // без повторений
            backgroundPosition: "center", // по центру
            transition: `opacity ${transition}ms ease-in-out, 
                        filter ${transition}ms ease-in-out, 
                        transform ${transition}ms ease-in-out`,
            filter: i === index ? "blur(0px)" : `blur(${blur}px)`,
            transform: i === index ? "scale(1)" : `scale(${scale})`,
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      ))}

      {overlay && <div className="bg-slider__overlay">{overlay}</div>}
    </div>
  );
};

export default BackgroundSlider;
