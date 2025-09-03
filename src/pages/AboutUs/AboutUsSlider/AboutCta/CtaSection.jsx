// import { useEffect } from "react";
// import AOS from "aos";
// import "./CtaSection.scss";

// const CtaSection = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 50,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <div className="cta">
//       <div className="cta__inner" data-aos="zoom-in-up">
//         <h3>
//           Əgər qeyri-adi həllər axtarırsınızsa, öz konsepsiyanızı həyata
//           keçirmək istəyirsinizsə və ya sadəcə keyfiyyətli metalı və “loft”
//           üslubunu dəyərləndirirsinizsə — əməkdaşlığa hazırıq. Sizin
//           arzularınız, bizim bacarığımız — nəticə sizi xoş təəccübləndirəcək.
//         </h3>
//         <p>Bizimlə əlaqə saxlayın və ideyalarınızı gerçəkləşdirək.</p>
//         <button className="cta__btn">Əlaqə saxlayın</button>
//       </div>
//     </div>
//   );
// };

// export default CtaSection;

// import { useEffect } from "react";
// import AOS from "aos";
// import "./CtaSection.scss";

// const CtaSection = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 50,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <div className="cta-light">
//       <div className="cta-light__inner" data-aos="fade-up">
//         <h3>
//           Qeyri-adi ideyalarınızı gerçəkləşdirmək və “loft” stilində
//           unikal məkan yaratmaq istəyirsiniz? Biz sizin yanınızdayıq!
//         </h3>
//         <p>Əlaqə saxlayın və ideyalarınızı həyatınıza gətirək.</p>
//         <button className="cta-light__btn">Əlaqə saxlayın</button>
//       </div>
//     </div>
//   );
// };

// export default CtaSection;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CtaSection.scss";
import ReusableButton from "../../../../reusableСomponents/Button/ReusableButton";

const CtaSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="cta-clean">
      <div className="cta-clean__inner" data-aos="fade-up">
        <h3>
          Əgər qeyri-adi həllər axtarırsınızsa, öz konsepsiyanızı həyata
          keçirmək istəyirsinizsə və ya sadəcə keyfiyyətli metalı və “loft”
          üslubunu dəyərləndirirsinizsə — əməkdaşlığa hazırıq. Sizin
          arzularınız, bizim bacarığımız — nəticə sizi xoş təəccübləndirəcək.
        </h3>
        <p>Bizimlə əlaqə saxlayın və ideyalarınızı gerçəkləşdirək.</p>

        <ReusableButton className="cta-light__btn">
          Əlaqə saxlayın
        </ReusableButton>
      </div>
    </section>
  );
};

export default CtaSection;
