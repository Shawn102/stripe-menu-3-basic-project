import React, { useState, useContext } from "react";
import sublinks from './Data';

const myAppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebaropen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [specificPage, setSpecificPage] = useState({page: '', links: []});
  const OnClickSidebarOpen = () => {
    setSidebaropen(true);
  };
  const OnClickSidebarClose = () => {
    setSidebaropen(false);
  };
  const OnClickSubmenuOpen = (text, coordinates) => {
    const findLink = sublinks.find(item => item.page === text);
    // console.log(findLink);
    setSpecificPage(findLink);
    setLocation(coordinates);
    setSubmenuOpen(true);
  };
  const OnClickSubmenuClose = () => {
    setSubmenuOpen(false);
  };
  return (
    <myAppContext.Provider
      value={{
        sidebarOpen,
        submenuOpen,
        OnClickSidebarOpen,
        OnClickSidebarClose,
        OnClickSubmenuOpen,
        OnClickSubmenuClose,
        location,
        specificPage
      }}
    >
      {children}
    </myAppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(myAppContext);
};
