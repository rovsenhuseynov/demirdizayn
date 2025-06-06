import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const LazyImage = ({ src, alt = "", className = "", style = {} }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  const [loaded, setLoaded] = useState(false);

  const defaultStyle = {
    width: "100%",
    display: "block",
    transition: "opacity 0.5s ease",
    opacity: loaded ? 1 : 0,
    ...style,
  };

  const placeholderStyle = {
    width: defaultStyle.width || "100%",
    height: defaultStyle.height || "400px",
    backgroundColor: "#eee",
  };

  return (
    <div ref={ref}>
      {inView ? (
        <img
          src={src}
          alt={alt}
          className={className}
          style={defaultStyle}
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <div className={className} style={placeholderStyle} />
      )}
    </div>
  );
};

export default LazyImage;
