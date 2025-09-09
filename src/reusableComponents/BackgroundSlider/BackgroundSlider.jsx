// BackgroundSlider.jsx
import { useEffect, useState, useRef, useCallback } from "react";
import "./BackgroundSlider.scss";

const BackgroundSlider = ({
  images = [],
  interval = 5000,
  transition = 1500,
  blur = 5,
  scale = 1.05,
  overlay = null,
  className = "",
  heightPercentPortrait = 85, // портрет
  heightPercentLandscape = 90, // маленькая горизонталь (интуитивно)
  width = "100%",
  minWidthForBigScreen = 1024, // порог для больших экранов
}) => {
  const [index, setIndex] = useState(0);
  const [sliderHeight, setSliderHeight] = useState(0);
  const sliderRef = useRef(null);

  const updateHeight = useCallback(() => {
    if (!sliderRef.current) return;
    const { innerWidth, innerHeight } = window;

    // Большие экраны: сохраняем прежний размер (например, 65% окна)
    if (innerWidth >= minWidthForBigScreen) {
      setSliderHeight(Math.round(innerHeight * 0.65));
      return;
    }

    const isPortrait = innerHeight > innerWidth;

    if (isPortrait) {
      // Портретные маленькие экраны
      setSliderHeight(Math.round(innerHeight * (heightPercentPortrait / 100)));
    } else {
      // Горизонтальные маленькие экраны — берем минимум высоты и ширины для корректного визуального размера
      const base = Math.min(innerWidth, innerHeight);
      setSliderHeight(Math.round(base * (heightPercentLandscape / 100)));
    }
  }, [heightPercentPortrait, heightPercentLandscape, minWidthForBigScreen]);

  useEffect(() => {
    updateHeight();
    const handleResize = () => requestAnimationFrame(updateHeight);

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [updateHeight]);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div
      ref={sliderRef}
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
