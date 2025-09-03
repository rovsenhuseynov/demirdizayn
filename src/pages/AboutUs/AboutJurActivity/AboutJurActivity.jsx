// import aboutData from "../../../data/aboutData";
// import "./AboutJurActivity.scss"

// const AboutJurActivity = ({ fadeLeft, fadeRight }) => {
//   return (
//     <div className="about__jurActivity">
//       <section className="about__jurActivity-left" data-aos={fadeRight}>
//         <h2 className="about__jurActivity-title">{aboutData.ourWork.title}</h2>
//         {aboutData.ourWork.text.map((paragraph, i) => (
//           <p key={i}>{paragraph}</p>
//         ))}
//         <div className="about__jurActivity-image">
//           <img src={aboutData.ourWork.image} alt="Missiya" />
//         </div>
//       </section>

//       <section className="about__jurActivity-right" data-aos={fadeLeft}>
//         {aboutData.cards.map((card, i) => (
//           <div className="about__card-vertical" key={i}>
//             <img className="about__card-image" src={card.icon} alt="icon" />
//             <div>
//               <h3>{card.title}</h3>
//               <p>{card.description}</p>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default AboutJurActivity;




import { useMemo, useState, useEffect } from "react";
import aboutData from "../../../data/aboutData";
import "./AboutJurActivity.scss"

const AboutJurActivity = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const apply = () => setIsMobile(mql.matches);
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  const fadeLeft = useMemo(
    () => (isMobile ? "fade-up" : "fade-left"),
    [isMobile]
  );
  const fadeRight = useMemo(
    () => (isMobile ? "fade-up" : "fade-right"),
    [isMobile]
  );

  return (
    <div className="about__jurActivity">
      <section className="about__jurActivity-left" data-aos={fadeRight}>
        <h2 className="about__jurActivity-title">{aboutData.ourWork.title}</h2>
        {aboutData.ourWork.text.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <div className="about__jurActivity-image">
          <img src={aboutData.ourWork.image} alt="Missiya" />
        </div>
      </section>

      <section className="about__jurActivity-right" data-aos={fadeLeft}>
        {aboutData.cards.map((card, i) => (
          <div className="about__card-vertical" key={i}>
            <img className="about__card-image" src={card.icon} alt="icon" />
            <div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutJurActivity;