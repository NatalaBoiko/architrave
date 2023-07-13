"use client";

import React from "react";
import Image from "next/image";

import styles from "./HeaderMenuBtn.module.scss";

export const HeaderMenuBtn = () => {
  return (
    <>
      <Image
        src="/mobileMenu.svg"
        alt="menu"
        width={16}
        height={16}
        className={styles.mobileMenu}
      />
    </>
  );
};
