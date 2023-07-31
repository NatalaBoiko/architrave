"use client";

import React, { useContext } from "react";

import styles from "./HeaderMenuBtn.module.scss";
import { SiteContext } from "@/context/SiteContext";

export const HeaderMenuBtn = () => {
  const { toggleMenu } = useContext(SiteContext);
  return (
    <>
      <svg className={styles.mobileMenu} onClick={toggleMenu}>
        <use href="/sprite.svg#icon-burger"></use>
      </svg>
    </>
  );
};
