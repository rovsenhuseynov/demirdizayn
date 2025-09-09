import "./AboutUs.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import aboutData from "../../data/aboutData";
import AboutGallery from "./SomeWorks/AboutGallery";
import AboutJurActivity from "./AboutJurActivity/AboutJurActivity";
import PhotoGallery from "../../reusableComponents/PhotoGallery/PhotoGallery";





const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const apply = () => setIsMobile(mql.matches);
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      disable: isMobile ? "mobile" : false,
    });
    AOS.refresh();
  }, [isMobile]);

  return (
    <section className="about">
      <h1 className="about__title" data-aos="fade-up">
        {aboutData.hero.title}
      </h1>

      <section className="about__hero">
        <div className="about__overlay">
          <p data-aos="fade-up" data-aos-delay="200">
            {aboutData.hero.overlayText}
          </p>
        </div>
      </section>

      <AboutJurActivity />
      <AboutGallery items={aboutData.galleryItems} />
      {/* <AboutUsBackgroundSlider />  ПРОБЛЕМА ТУТ */}
      <PhotoGallery/>
      
    </section>
  );
};

export default AboutUs;
