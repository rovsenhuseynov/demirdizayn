// import BackgroundSlider from "../../../reusableСomponents/BackgroundSlider/BackgroundSlider";
// import "./AboutUsBackgroundSlider.scss";

// import about1 from "../../../assets/images/backgrounds/stool-wooden-background.jpg";
// import about2 from "../../../assets/images/backgrounds/58375_big.jpg";
// import about3 from "../../../assets/images/backgrounds/3_n.jpg";

// const AboutUsBackgroundSlider = () => {
//   return (
//     <BackgroundSlider
//       images={[about1, about2, about3]}
//       interval={5000}
//       transition={2000}
//       blur={25}
//       scale={1.1}
//       height="80vh"
//       width = "60%"
//       overlay={
//         <div className="aboutus-slider__overlay">
//           <h1 className="aboutus-slider__title">О нас</h1>
//           <p className="aboutus-slider__text">
//             Мы создаём красоту и уют в каждом доме.
//           </p>
//         </div>
//       }
//       className="aboutus-slider"
//     />
//   );
// };

// export default AboutUsBackgroundSlider;



import BackgroundSlider from "../../../reusableСomponents/BackgroundSlider/BackgroundSlider";
import "./AboutUsBackgroundSlider.scss";

import about1 from "../../../assets/images/backgrounds/stool-wooden-background.jpg";
import about2 from "../../../assets/images/backgrounds/58375_big.jpg";
import about3 from "../../../assets/images/backgrounds/3_n.jpg";

const AboutUsBackgroundSlider = () => {
  return (
    <BackgroundSlider
      images={[about1, about2, about3]}
      interval={5000}
      transition={2000}
      blur={25}
      scale={1.1}
      height="90vh"
      width="100%"   // ширина слайдера
      overlay={
        <div className="aboutus-slider__overlay">
          <h1 className="aboutus-slider__title">О нас</h1>
          <p className="aboutus-slider__text">
            Мы создаём красоту и уют в каждом доме.
          </p>
        </div>
      }
      className="aboutus-slider"
    />
  );
};

export default AboutUsBackgroundSlider;