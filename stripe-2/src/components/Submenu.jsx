import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const Submenu = () => {
  const { submenuOpen, location, specificPage } = useGlobalContext();
  const [columns, setColumns] = useState("col-2");
  const container = useRef(null);
  const { page, links } = specificPage;
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);
  return (
    <aside
      className={`${submenuOpen ? "submenu show-submenu" : "submenu"}`}
      ref={container}
    >
      <h4 className="submenu-h1">{page}</h4>
      <section className={`submenu-center ${columns}`}>
        {links.map((subLink, index) => {
          const { label, url, icon } = subLink;
          return (
            <a key={index} href={url} className="sub-a">
              {icon} {label}
            </a>
          );
        })}
      </section>
    </aside>
  );
};
export default Submenu;
