// import { useState } from "react";
// import "./AboutGallery.scss";

// const AboutGallery = ({ items }) => {
//   const [active, setActive] = useState(null);

//   const openLightbox = (index) => setActive(index);
//   const closeLightbox = () => setActive(null);

//   return (
//     <div className="about__gallery">
//       <h2 data-aos="fade-up">Наши работы</h2>
//       <div className="about__grid">
//         {items.map((item, i) => (
//           <div
//             className="about__item"
//             key={i}
//             data-aos="zoom-in"
//             data-aos-delay={i * 150}
//           >
//             <div
//               className="about__image-wrapper"
//               onClick={() => openLightbox(i)}
//             >
//               <img src={item.src} alt={item.text} />
//               <div className="about__overlay">
//                 <p>{item.text}</p>
//                 <span className="about__icon">🔍</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {active !== null && (
//         <div className="about__lightbox" onClick={closeLightbox}>
//           <div
//             className="about__lightbox-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img src={items[active].src} alt={items[active].text} />
//             <p>{items[active].text}</p>
//             <button className="about__lightbox-close" onClick={closeLightbox}>
//               ✖
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AboutGallery;




import { useState } from "react";
import "./AboutGallery.scss";

const AboutGallery = ({ items }) => {
  const [active, setActive] = useState(null);

  const openLightbox = (index) => setActive(index);
  const closeLightbox = () => setActive(null);

  return (
    <div className="about__gallery">
      <h2 data-aos="fade-up">Наши работы</h2>

      <div className="about__grid">
        {items.map((item, i) => (
          <div
            className="about__item"
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 150}
          >
            <div
              className="about__image-wrapper"
              onClick={() => openLightbox(i)}
            >
              <img src={item.src} alt={item.text} />
              <div className="about__overlay">
                <p>{item.text}</p>
                <span className="about__icon">🔍</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {active !== null && (
        <div className="about__lightbox" onClick={closeLightbox}>
          <div
            className="about__lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={items[active].big} alt={items[active].text} />
            <p>{items[active].text}</p>
            <button
              className="about__lightbox-close"
              onClick={closeLightbox}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutGallery;