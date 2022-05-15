import React, { useState, useContext } from "react";
import sublinks from "./Data";

const AppContext = React.createContext();

export const AppProviderContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [exactPage, setExactPage] = useState({ page: "", links: [] });
  const OpenSidebar = () => {
    setIsSidebarOpen(true);
  };
  const CloseSidebarOpen = () => {
    setIsSidebarOpen(false);
  };
  //   This function will handle the submenu behaviour
  const OpenSubmenu = (page, coordinates) => {
    setLocation(coordinates);
    const specificPage = sublinks.find((link) => link.page === page);
    setExactPage(specificPage);
    setIsSubmenuOpen(true);
  };
  const CloseSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        OpenSidebar,
        CloseSidebarOpen,
        isSubmenuOpen,
        OpenSubmenu,
        CloseSubmenu,
        location,
        exactPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const MyGlobalContext = () => {
  return useContext(AppContext);
};



