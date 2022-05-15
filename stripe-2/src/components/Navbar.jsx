import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import stripe from "../images/logo.svg";

const Navbar = () => {
  const { OnClickSidebarOpen, OnClickSubmenuOpen, OnClickSubmenuClose } = useGlobalContext();
  const DisplayOnMouse = (e) => {
      const currentText = e.target.textContent;
    //   console.log(currentText);
    const tempBtn = e.target.getBoundingClientRect();
    // console.log(tempBtn);
    const center = (tempBtn.right + tempBtn.left) / 2;
    const bottom = tempBtn.bottom + 5;
    OnClickSubmenuOpen(currentText, {center, bottom});
  };
  const CloseOnMouseOver = (event) => {
      if(!event.target.classList.contains("btn-all")){
          OnClickSubmenuClose();
      }
  }
  return (
    <nav onMouseOver={CloseOnMouseOver}>
      <div className="nav-header">
        <img src={stripe} alt="stripe" />
        <button onClick={OnClickSidebarOpen} className="fa-bars-btn">
          <FaBars /> 
        </button>
      </div>
      <ul className="ul">
        <li className="li">
          <button onMouseOver={DisplayOnMouse} className="btn-all">products</button>
        </li>
        <li className="li">
          <button onMouseOver={DisplayOnMouse} className="btn-all">developers</button>
        </li>
        <li className="li">
          <button onMouseOver={DisplayOnMouse} className="btn-all">company</button>
        </li>
      </ul>
      <button className="btn-sign-in">Sign in</button>
    </nav>
  );
};
export default Navbar;
