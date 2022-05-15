import React from "react";
import stripe from "../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { MyGlobalContext } from "../Context";

const Nav = () => {
  const { OpenSidebar, OpenSubmenu, CloseSubmenu } = MyGlobalContext();

  const HandleOnMouseOverSub = (event) => {
    const page = event.target.textContent;
    const tempBtn = event.target.getBoundingClientRect();
    // console.log(page);
    // console.log(tempBtn);
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 2;
    // Passing the 'center' and 'bottom' to context.js, because there are some extra work to make this website dynamic
    OpenSubmenu(page, { center, bottom });
  };
  const OnMouseCloseSubmenu = (e) => {
    if (!e.target.classList.contains("btn-all")) {
      CloseSubmenu();
    }
  };
  return (
    <nav onMouseOver={OnMouseCloseSubmenu}>
      <div className="nav-header">
        <img src={stripe} alt="stripe" />
        <button onClick={OpenSidebar} className="fa-bars">
          <FaBars />
        </button>
      </div>
      <ul className="nav-center">
        <li className="nav-li">
          <button onMouseOver={HandleOnMouseOverSub} className="btn-all">
            products
          </button>
        </li>
        <li className="nav-li">
          <button onMouseOver={HandleOnMouseOverSub} className="btn-all">
            developers
          </button>
        </li>
        <li className="nav-li">
          <button onMouseOver={HandleOnMouseOverSub} className="btn-all">
            company
          </button>
        </li>
      </ul>
      <button className="sign-in-btn">Sign in</button>
    </nav>
  );
};
export default Nav;
