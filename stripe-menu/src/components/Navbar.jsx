import React from "react";
import logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from "./Context";

const Navbar = () => {
    const { OnClickSideOpen, OnOpenSubMenu, OutCloseSubMenu } = useGlobalContext();
    const DisplaySubmenu = (e) => {
        // console.log(e.target);
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        // console.log(tempBtn);
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom + 5;
        OnOpenSubMenu(page, {center, bottom});
    }
    const HandleSubmenu = e => {
        if(!e.target.classList.contains('btn-all')) {
            OutCloseSubMenu();
        }
    }
    return (
        <nav>
           <div className="nav-header" onMouseOver={HandleSubmenu}>
             <img src={logo} alt='stripe' className="header-logo"/> 
              <button
              onClick={OnClickSideOpen} className="btn-bars">
                  <FaBars />
              </button>
           </div> 
           <ul className="nav-middle">
               <li>
                   <button onMouseOver={DisplaySubmenu} className="btn-all">
                   products
                   </button>
               </li>
               <li>
               <button onMouseOver={DisplaySubmenu} className="btn-all">
               developers
                   </button>
               </li>
               <li>
               <button onMouseOver={DisplaySubmenu} className="btn-all">
               company
                   </button>
               </li>
           </ul>
           <button className="btn-sign-in">
               Sign in
           </button>
        </nav>
    )
};
export default Navbar;