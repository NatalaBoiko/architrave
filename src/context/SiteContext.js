"use client";
import React, { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [menuBtnOn, setMenuBtnOn] = useState(false);
  // console.log(menuBtnOn);

  const openMenu = () => {
    setMenuBtnOn(true);
  };
  const closeMenu = () => {
    setMenuBtnOn(false);
  };
  const toggleMenu = () => {
    setMenuBtnOn(!menuBtnOn);
  };

  return (
    <SiteContext.Provider
      value={{
        menuBtnOn,
        setMenuBtnOn,
        openMenu,
        closeMenu,
        toggleMenu,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
