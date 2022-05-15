import React from "react";
import { ImCross } from 'react-icons/im';
import sublinks from "../Data";
import { useGlobalContext } from "../context";
 
const Sidebar = () => {
    const { sidebarOpen, OnClickSidebarClose } = useGlobalContext();
    return (
        <aside className={`${sidebarOpen ? "sidebar show-sidebar":"sidebar"}`}>
            <section className="sidebar-box">
                <button onClick={OnClickSidebarClose} className="close-sidebar-btn">
                    <ImCross />
                    </button>
                    <div>
                        {sublinks.map((item, index) => {
                            const {page, links} = item;
                            return (
                                <article key={index}>
                                    <h4 className="h4-sidebar">{page}</h4>
                                    <article className="sidebar-inside">
                                    {links.map((linkOfSingle, index) => {
                                        const {label, icon, url} = linkOfSingle;
                                        return (
                                            <a href={url} key={index} className='a1'>
                                            {icon} 
                                            {label}
                                       </a>            
                                        )
                                    })}
                                    </article>
                                </article>             
                            )
                        })}
                    </div>
            </section>
        </aside>
    )
};
export default Sidebar;