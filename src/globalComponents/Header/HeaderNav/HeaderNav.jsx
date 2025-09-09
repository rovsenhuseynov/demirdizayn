import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderNav.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NawDropDownMenu from "../../../reusableComponents/DropDownMenu/NawDropDownMenu";
import Logo from "../../../reusableComponents/Logo/Logo";

const HeaderNav = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [scrollDirection, setScrollDirection] = React.useState("up");
  const [prevScrollPos, setPrevScrollPos] = React.useState(window.scrollY);
  const navRef = React.useRef(null);

  const toggleMenu = () => setOpen((prev) => !prev);

  const handleScroll = React.useCallback(() => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  React.useEffect(() => {
    if (navRef.current) {
      if (scrollDirection === "down") {
        navRef.current.classList.add("header-nav--hidden");
      } else {
        navRef.current.classList.remove("header-nav--hidden");
      }
    }
  }, [scrollDirection]);

  const navLinks = [
    { to: "/", text: "ƏSAS" },
    { to: "/services", text: "XIDMƏTLƏR" },
    { to: "/products", text: "MƏHSULLAR" },
    { to: "/faq", text: "FAQ" },
    { to: "/jurnal", text: "JURNAL" },
    { to: "/contacts", text: "CONTACTS" },
  ];

  return (
    <div ref={navRef} className="header-nav">
      <div className="header-nav__content">
        <Logo />
        <nav className={`header__nav ${isOpen ? "active" : ""}`}>
          <div className="header__nav-list">
            {navLinks.map(({ to, text }) =>
              to === "/services" ? (
                <div key={to} className="header__nav-item">
                  <NavLink
                    to={to}
                    className="header__nav-item-link services-class"
                    onClick={() => setOpen(false)}
                  >
                    {text}
                  </NavLink>
                  <NawDropDownMenu onClose={() => setOpen(false)} />
                </div>
              ) : (
                <NavLink
                  key={to}
                  to={to}
                  className="header__nav-item"
                  onClick={() => setOpen(false)}
                >
                  {text}
                </NavLink>
              )
            )}
          </div>
        </nav>
        <button
          className={`header__menu-btn ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  );
};

export default HeaderNav;
