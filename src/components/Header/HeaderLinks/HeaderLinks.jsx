"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import styles from "./HeaderLinks.module.scss";

import { headerLincsArr } from "@/data/headerLincsArr";
import { handleScroll } from "@/helpers/handleScroll";
import { SiteContext } from "@/context/SiteContext";

export const HeaderLinks = () => {
  const { menuBtnOn, closeMenu, toggleMenu } = useContext(SiteContext);

  const closeMenuByClicl = (e) => {
    // console.log(e.target.nodeName);
    // console.log(e.currentTarget);
    if (e.target.nodeName !== "SECTION") {
      return;
    }

    closeMenu();
  };

  const onKeydown = (e) => {
    // console.log(e.code);
    if (e.code !== "Escape") return;
    closeMenu();
  };

  useEffect(() => {
    window.addEventListener("click", closeMenuByClicl);
    window.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("click", closeMenuByClicl);
      window.removeEventListener("keydown", onKeydown);
    };
  }, [closeMenuByClicl, onKeydown]);

  return (
    <ul
      onClick={(e) => {
        e.stopPropagation();
      }}
      id="headerLinks"
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
