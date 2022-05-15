import React, { useState, useContext } from "react";
import sublinks from "../Data";

const myContext = React.createContext();

export const AppProvider = ({children}) => {
    const [openSide, setOpenSide] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(false);
    const [location, setLocation] = useState({});
    const [exactPage, setExactPage] = useState({page: '', links: []});
    const OnClickSideOpen = () => {
        setOpenSide(true);
    }
    const OnClickSideClose = () => {
        setOpenSide(false);
    }
    const OnOpenSubMenu = (text, coordinates) => {
        const page = sublinks.find(link => link.page === text);
        setExactPage(page);
        setLocation(coordinates);
        setOpenSubmenu(true);
    }
    const OutCloseSubMenu = () => {
        setOpenSubmenu(false);
    }

    return <myContext.Provider value={
        {
        openSide,
        openSubmenu,
        OnClickSideOpen,
        OnClickSideClose, 
        OnOpenSubMenu, 
        OutCloseSubMenu,
        location, 
        exactPage}
        }>
        {children}
    </myContext.Provider>
};
export const useGlobalContext = () => {
    return useContext(myContext);
}
