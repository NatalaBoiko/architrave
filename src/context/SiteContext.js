"use client";
import React, { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [menuBtnOn, setMenuBtnOn] = useState(false);
  // console.log(menuBtnOn);
  const [isModalVisible, setModalVisible] = useState(false);
  // console.log(isModalVisible);
  const [modalBackdrop, setModalBackdrop] = useState(false);

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
        isModalVisible,
        setModalVisible,
        modalBackdrop,
        setModalBackdrop,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
