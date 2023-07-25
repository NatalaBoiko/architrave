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

  const toggleScroll = () => {
    // console.log(scrollY);
    if (!menuBtnOn) return;
    window.scroll({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScroll);
    window.addEventListener("click", closeMenuByClicl);

    return () => {
      window.removeEventListener("scroll", toggleScroll);
      window.removeEventListener("click", closeMenuByClicl);
    };
  }, [toggleScroll]);

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
