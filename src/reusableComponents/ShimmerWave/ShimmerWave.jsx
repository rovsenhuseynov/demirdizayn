// import "./ShimmerWave.scss";

// const ShimmerWave = ({ text = "", speed = 2.4 }) => {
//   return (
//     <div className="shimmer-wave-wrapper">
//       <div className="shimmerWave">
//         {text.split("").map((char, index) => (
//           <span
//             key={index}
//             style={{
//               animationDelay: `${0.05 * index}s`,
//               animationDuration: `${speed}s`,
//             }}
//           >
//             {char === " " ? "\u00A0" : char}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShimmerWave;







import "./ShimmerWave.scss";

const ShimmerWave = ({ text = "", speed = 2.4 }) => {
  const chunkSize = 11;

  const mainText = text.slice(0, text.length - chunkSize);
  const lastChunk = text.slice(-chunkSize);

  return (
    <div className="shimmer-wave-wrapper">
      <div className="shimmerWave">
        {/* Основной текст */}
        <div className="shimmer-main-line">
          {mainText.split("").map((char, index) => (
            <span
              key={index}
              style={{
                animationDelay: `${0.05 * index}s`,
                animationDuration: `${speed}s`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        {/* Последние 11 символов */}
        {lastChunk && (
          <div className="shimmer-line">
            {lastChunk.split("").map((char, index) => (
              <span
                key={index}
                className="last-chunk-char"
                style={{
                  // animationDelay продолжается после основной строки
                  animationDelay: `${0.05 * (mainText.length + index)}s`,
                  animationDuration: `${speed}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShimmerWave;