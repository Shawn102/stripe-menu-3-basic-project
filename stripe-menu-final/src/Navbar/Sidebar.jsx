import React from "react";
import { ImCross } from "react-icons/im";
import sublinks from "../Data";
import { Link } from "react-router-dom";
import { MyGlobalContext } from "../Context";

const Sidebar = () => {
    const {isSidebarOpen, CloseSidebarOpen} = MyGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar":"sidebar"}`}>
      <div className="inside-box-of-sidebar">
        <button onClick={CloseSidebarOpen} className="cross-btn">
          <ImCross />
        </button>
        {sublinks.map((item, index) => {
          const { page, links } = item;
          return (
            <div key={index}>
              <h4 className="h4-sidebar">{page}</h4>
              <div className="inside-map-sidebar">
                {links.map((link, index) => {
                  const { label, url, icon } = link;
                  return (
                    <Link onClick={CloseSidebarOpen} className="sidebar-link" key={index} to={url}>
                      {icon}
                      {label}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
export default Sidebar;
