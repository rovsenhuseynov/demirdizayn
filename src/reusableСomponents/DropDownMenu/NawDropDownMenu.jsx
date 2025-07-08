import React from "react";
import "./DropDownMenu.scss";
import { NavLink } from "react-router-dom";

const NawDropDownMenu = ({ onClose }) => {
  return (

    <ul className="dropdown">
      <li className="dropdown__item ">
        <NavLink to="/tulle" className="dropdown__item-link" onClick={onClose}>
        element-1
        </NavLink>
      </li>

      <li className="dropdown__item">
        <NavLink
          to="/thick_curtains"
          className="dropdown__item-link"
          onClick={onClose}
        >
          element-2
        </NavLink>
      </li>

      <li className="dropdown__item">
        <NavLink
          to="/subtle_blackout"
          className="dropdown__item-link"
          onClick={onClose}
        >
          element-3
        </NavLink>
      </li>

      {/* <li className="dropdown__item">
        <NavLink
          to="/blackout"
          className="dropdown__item-link"
          onClick={onClose}
        >
          element-4
        </NavLink>
      </li> */}

      {/* <li className="dropdown__item">
        <NavLink
          to="/peculiarities"
          className="dropdown__item-link"
          onClick={onClose}
        >
          element-5
        </NavLink>
      </li> */}
      
    </ul>
  );
};

export default NawDropDownMenu;
