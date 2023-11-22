"use client";

import React, { useContext, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "./HeaderLinks.module.scss";

import { headerLincsArr } from "@/data/headerLincsArr";
import { handleScroll } from "@/helpers/handleScroll";
import { SiteContext } from "@/context/SiteContext";

export const HeaderLinks = () => {
  const { menuBtnOn, closeMenu, toggleMenu } = useContext(SiteContext);

  const closeMenuByClick = useCallback(
    (e) => {
      if (e.target.nodeName !== "SECTION") {
        return;
      }

      closeMenu();
    },
    [closeMenu]
  );

  const onKeydown = useCallback(
    (e) => {
      // console.log(e.code);
      if (e.code !== "Escape") return;
      closeMenu();
    },
    [closeMenu]
  );

  useEffect(() => {
    window.addEventListener("click", closeMenuByClick);
    window.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("click", closeMenuByClick);
      window.removeEventListener("keydown", onKeydown);
    };
  }, [closeMenuByClick, onKeydown]);

  useEffect(() => {
    if (menuBtnOn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuBtnOn]);

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
