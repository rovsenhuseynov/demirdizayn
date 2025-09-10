import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CtaSection.scss";
import ReusableButton from "../../../reusableComponents/Button/ReusableButton";
import { useNavigate } from "react-router-dom";

const CtaSection = () => {
  const navigate = useNavigate();
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
          Əgər <strong>qeyri-adi həllər</strong> axtarırsınızsa, öz
          konsepsiyanızı həyata keçirmək istəyirsinizsə və ya sadəcə
          <strong>keyfiyyətli metalı</strong> və{" "}
          <strong>“loft” üslubunu</strong>
          dəyərləndirirsinizsə — əməkdaşlığa hazırıq.
        </h3>

        <h4 className="cta-subtitle">
          <strong>Sizin arzularınız, bizim bacarığımız</strong> — nəticə sizi
          xoş təəccübləndirəcək.
        </h4>

        <p className="cta-text">
          Bizimlə əlaqə saxlayın və ideyalarınızı gerçəkləşdirək.
        </p>

        <ReusableButton
          className="cta-light__btn"
          onClick={() => navigate("/contacts")}
        >
          Əlaqə saxlayın
        </ReusableButton>
      </div>
    </section>
  );
};

export default CtaSection;
