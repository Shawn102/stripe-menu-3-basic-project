import React from "react";
import { GrClose } from 'react-icons/gr';
import { useGlobalContext } from "./Context";
import sublinks from "../Data";
const Sidebar = () => {
    const {openSide, OnClickSideClose } = useGlobalContext();
    return (
        <aside className={openSide ? 'aside show-sidebar': 'aside'}>
            <div className="sidebar-center">
                <button onClick={OnClickSideClose} className="btn-cross">
                    <GrClose />
                </button>
                <div>
                    {sublinks.map((singlePage, index) => {
                        const {links, page} = singlePage;
                        return (
                            <article key={index}>
                                <h4>{page}</h4>
                                <div className="sidebar-sublinks">
                                    {links.map((link, index) => {
                                        const {url, icon, label} = link;
                                        return (
                                            <a href={url} key={index}>
                                                {icon}
                                                {label}
                                            </a>
                                        )
                                    })}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </aside>
    )
};
export default Sidebar;