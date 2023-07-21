"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import styles from "./HeaderLinks.module.scss";

import { headerLincsArr } from "@/data/headerLincsArr";
import { handleScroll } from "@/helpers/handleScroll";
import { SiteContext } from "@/context/SiteContext";

export const HeaderLinks = () => {
  const { menuBtnOn, closeMenu, toggleMenu } = useContext(SiteContext);

  useEffect(() => {
    const onKeydown = (e) => {
      if (e.code !== "Escape") return;
      closeMenu();
    };

    window.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [closeMenu]);

  return (
    <ul
      className={
        menuBtnOn
          ? `${styles.headerLinks} ${styles.visible}`
          : styles.headerLinks
      }
    >
      <svg className={styles.closeSvg} onClick={toggleMenu}>
        <use href="/sprite.svg#icon-close"></use>
      </svg>
      {headerLincsArr.map(({ id, title, href }) => {
        return (
          <li key={id} onClick={closeMenu}>
            <Link href={href} scroll={false} onClick={handleScroll}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
