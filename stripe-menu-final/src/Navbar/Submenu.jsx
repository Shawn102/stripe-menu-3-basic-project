import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MyGlobalContext } from "../Context";

const Submenu = () => {
  const { isSubmenuOpen, location, exactPage, CloseSubmenu } = MyGlobalContext();
  const { page, links } = exactPage;
  const Container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-2");
    const { center, bottom } = location;
    const subMenu = Container.current;
    subMenu.style.left = `${center}px`;
    subMenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col-3");
    }
    if(links.length > 3) {
        setColumns('col-4');
    }
  }, [location, links]);

//   const OnMouseOutClose = (e) => {
//       if(!e.target.classList.contains(`${"submenu show-submenu"}`) && !isSubmenuOpen) {
//           CloseSubmenu()
//       }
//   } 
  return (
    <aside 
      className={`${isSubmenuOpen ? "submenu show-submenu" : "submenu"}`}
      ref={Container}
    >
      <h4 className="h4-sidebar">{page}</h4>
      <div className={`submenu-links-grid ${columns}`}>
        {links.map((item, index) => {
          const { label, url, icon } = item;
          return (
            <Link key={index} to={url} className="sidebar-link">
              {icon}
              {label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};
export default Submenu;
