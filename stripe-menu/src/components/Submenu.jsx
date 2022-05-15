import React, { useState, useEffect, useRef} from "react";
import { useGlobalContext } from "./Context";

const Submenu = () => {
    const { openSubmenu, location, exactPage:{page, links} } = useGlobalContext();
    const container = useRef(null);
    const [columns, setColums] = useState('col-2');
    useEffect(() => {
        setColums('col-2');
        const submenu = container.current;
        const {center, bottom} = location;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;
        if(links.length === 3) {
            setColums('col-3');
        }
        if(links.length > 3) {
            setColums('col-4');
        }
    }, [location, links]);
    return (
        <aside className={`${openSubmenu ? 'submenu showSubmenu':'submenu'}`} ref={container}>
            <section>
                <h4>{page}</h4>
                <div className={`submenu-center ${columns}`}>
                    {links.map((lastink, index) => {
                        const {label, icon, url} = lastink;
                        return (
                           <a href={url} key={index}>
                               {icon}
                               {label}
                           </a> 
                        )
                    })}
                </div>
            </section>
            </aside>
    )
};
export default Submenu;