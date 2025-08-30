// import BackgroundSlider from "../../../reusableСomponents/BackgroundSlider/BackgroundSlider";
// import "./AboutUsBackgroundSlider.scss";

// import about1 from "../../../assets/images/backgrounds/stool-wooden-background.jpg";
// import about2 from "../../../assets/images/backgrounds/58375_big.jpg";
// import about3 from "../../../assets/images/backgrounds/3_n.jpg";
// import ReusableButton from "../../../reusableСomponents/Button/ReusableButton";
// import { useNavigate } from "react-router-dom";

// const AboutUsBackgroundSlider = () => {
//   const navigate = useNavigate();
//   return (
//     <BackgroundSlider
//       images={[about1, about2, about3]}
//       interval={5000}
//       transition={2000}
//       blur={25}
//       scale={1.1}
//       height="90vh"
//       width="100%"
//       overlay={
//         <section className="cta-clean">
//           <div className="cta-clean__inner" data-aos="fade-up">
//             <h3>
//               Əgər qeyri-adi həllər axtarırsınızsa, öz konsepsiyanızı həyata
//               keçirmək istəyirsinizsə və ya sadəcə keyfiyyətli metalı və “loft”
//               üslubunu dəyərləndirirsinizsə — əməkdaşlığa hazırıq. Sizin
//               arzularınız, bizim bacarığımız — nəticə sizi xoş
//               təəccübləndirəcək.
//             </h3>
//             <p>Bizimlə əlaqə saxlayın və ideyalarınızı gerçəkləşdirək.</p>

//             <ReusableButton
//               className="cta-clean__btn"
//               onClick={() => navigate("/contacts")}
//             >
//               Əlaqə saxlayın
//             </ReusableButton>
//           </div>
//         </section>
//       }
//       className="aboutus-slider"
//     />
//   );
// };

// export default AboutUsBackgroundSlider;




// import BackgroundSlider from "../../../reusableСomponents/BackgroundSlider/BackgroundSlider";
// import "./AboutUsBackgroundSlider.scss";

// import about1 from "../../../assets/images/backgrounds/stool-wooden-background.jpg";
// import about2 from "../../../assets/images/backgrounds/58375_big.jpg";
// import about3 from "../../../assets/images/backgrounds/3_n.jpg";
// import ReusableButton from "../../../reusableСomponents/Button/ReusableButton";
// import { useNavigate } from "react-router-dom";

// const AboutUsBackgroundSlider = () => {
//   const navigate = useNavigate();
//   return (
//     <section className="aboutus-wrapper">
//       {/* Контент над слайдером */}
//       <div className="cta-clean" data-aos="fade-up">
//         <div className="cta-clean__inner">
//           <h3>
//             Əgər qeyri-adi həllər axtarırsınızsa, öz konsepsiyanızı həyata
//             keçirmək istəyirsinizsə və ya sadəcə keyfiyyətli metalı və “loft”
//             üslubunu dəyərləndirirsinizsə — əməkdaşlığa hazırıq. Sizin
//             arzularınız, bizim bacarığımız — nəticə sizi xoş təəccübləndirəcək.
//           </h3>
//           <p>Bizimlə əlaqə saxlayın və ideyalarınızı gerçəkləşdirək.</p>
//         </div>
//       </div>

//       {/* Слайдер с кнопкой по центру */}
//       <BackgroundSlider
//         images={[about1, about2, about3]}
//         interval={5000}
//         transition={2000}
//         blur={25}
//         scale={1.1}
//         height="80vh"
//         width="100%"
//         overlay={
//           <div className="aboutus-slider__overlay">
//             <ReusableButton
//               className="cta-clean__btn"
//               onClick={() => navigate("/contacts")}
//             >
//               Əlaqə saxlayın
//             </ReusableButton>
//           </div>
//         }
//         className="aboutus-slider"
//       />
//     </section>
//   );
// };

// export default AboutUsBackgroundSlider;




import { useEffect, useState } from "react";
import BackgroundSlider from "../../../reusableСomponents/BackgroundSlider/BackgroundSlider";
import "./AboutUsBackgroundSlider.scss";

import about1 from "../../../assets/images/backgrounds/stool-wooden-background.jpg";
import about2 from "../../../assets/images/backgrounds/58375_big.jpg";
import about3 from "../../../assets/images/backgrounds/3_n.jpg";
import ReusableButton from "../../../reusableСomponents/Button/ReusableButton";
import { useNavigate } from "react-router-dom";

const AboutUsBackgroundSlider = () => {
  const navigate = useNavigate();

  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="aboutus-cta">
      {/* Контент над слайдером */}
      <div className="cta-clean" data-aos="fade-up">
        <div className="cta-clean__inner">
          <h3>
            Əgər qeyri-adi həllər axtarırsınızsa, öz konsepsiyanızı həyata
            keçirmək istəyirsinizsə və ya sadəcə keyfiyyətli metalı və “loft”
            üslubunu dəyərləndirirsinizsə — əməkdaşlığa hazırıq. Sizin
            arzularınız, bizim bacarığımız — nəticə sizi xoş təəccübləndirəcək.
          </h3>
          <p>Bizimlə əlaqə saxlayın və ideyalarınızı gerçəkləşdirək.</p>
        </div>
      </div>

      {/* Слайдер с кнопкой по центру */}
      <BackgroundSlider
        images={[about1, about2, about3]}
        interval={5000}
        transition={2000}
        blur={25}
        scale={1.1}
        height={isPortrait ? "60dvh" : "80dvh"}   // разные размеры
        width={isPortrait ? "100%" : "100%"}  // разные размеры
        overlay={
          <div className="aboutus-slider__overlay">
            <ReusableButton
              className="cta-clean__btn"
              onClick={() => navigate("/contacts")}
            >
              Əlaqə saxlayın
            </ReusableButton>
          </div>
        }
        className="aboutus-slider"
      />
    </section>
  );
};

export default AboutUsBackgroundSlider;