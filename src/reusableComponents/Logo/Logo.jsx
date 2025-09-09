import "./Logo.scss";
import { NavLink } from "react-router-dom";
import logo_img from "../../assets/images/logos/website-logo-welding-part.svg";

function Logo() {
  return (
    <div className="logo footer__logo">
      <NavLink to="/">
        <div className="header-nav__logo">
          <img src={logo_img} alt="logo" className="header-nav__img" />
          <h5 className="header-nav__context"><span className="bold">L</span>oft<span className="bold">C</span>raft</h5>
        </div>
      </NavLink>
    </div>
  );
}

export default Logo;
