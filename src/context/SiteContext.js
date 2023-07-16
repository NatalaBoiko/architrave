"use client";
import React, { useState } from "react";
import { createContext } from "react";

import React from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [menuBtnOn, setMenuBtnOn] = useState(false);

  const openMenu = () => {
    setMenuBtnOn(true);
  };
  const closeMenu = () => {
    setMenuBtnOn(false);
  };
  const togggleMenu = () => {
    setMenuBtnOn(!menuBtnOn);
  };

  <SiteContext.Provider
    value={{ menuBtnOn, setMenuBtnOn, openMenu, closeMenu, togggleMenu }}
  >
    {children}
  </SiteContext.Provider>;
};
