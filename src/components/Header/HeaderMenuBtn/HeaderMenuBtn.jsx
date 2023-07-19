"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";

import styles from "./HeaderMenuBtn.module.scss";
import { SiteContext } from "@/context/SiteContext";

export const HeaderMenuBtn = () => {
  const { menuBtnOn, setMenuBtnOn, openMenu, closeMenu, toggleMenu } =
    useContext(SiteContext);
  return (
    <>
      <svg className={styles.mobileMenu} onClick={toggleMenu}>
        <use href="/sprite.svg#icon-burger"></use>
      </svg>
    </>
  );
};
