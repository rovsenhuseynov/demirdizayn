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
  height = "75svh", // занимает 75% высоты экрана
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
