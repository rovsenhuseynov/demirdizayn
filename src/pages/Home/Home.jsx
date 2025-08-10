import FaqPreview from "./FaqPreview/FaqPreview.jsx";
import HeroBanner from "./HeroBanner/HeroBanner";
import "./Home.scss";
import ServicesPreview from "./ServicesPreview/ServicesPreview.jsx";

const Home = () => {
  return (
    <div className="home-page">
      <HeroBanner />
      <ServicesPreview />
      <FaqPreview />
    </div>
  );
};

export default Home;
