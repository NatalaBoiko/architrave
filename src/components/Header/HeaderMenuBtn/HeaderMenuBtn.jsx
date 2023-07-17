"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";

import styles from "./HeaderMenuBtn.module.scss";
import { SiteContext } from "@/context/SiteContext";

export const HeaderMenuBtn = () => {
  const { menuBtnOn, setMenuBtnOn, openMenu, closeMenu, togggleMenu } =
    useContext(SiteContext);
  return (
    <>
      <Image
        src="/mobileMenu.svg"
        alt="menu"
        width={16}
        height={16}
        className={styles.mobileMenu}
        onClick={togggleMenu}
      />
    </>
  );
};
