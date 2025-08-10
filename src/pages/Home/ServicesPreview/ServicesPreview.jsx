import { useNavigate } from "react-router-dom";
import ReusableButton from "../../../reusableСomponents/Button/ReusableButton";
import servicesList from "../../../data/ServicesPage";
import "./ServicesPreview.scss";

const ServicesPreview = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/services");
  };

  return (
    <section className="services-preview">
      <h2 className="services-preview__title">Xidmətlərimiz</h2>
      <div className="services-preview__list">
        {servicesList.map((service, index) => (
          <div className="services-preview__item" key={index}>
            <img
              src={service.icon}
              alt={service.title}
              className="services-preview__icon"
            />
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="services-preview__button-wrapper">
        <ReusableButton onClick={handleNavigate}>
          Bütün xidmətlər
        </ReusableButton>
      </div>
    </section>
  );
};

export default ServicesPreview;
