"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import styles from "./HeaderLinks.module.scss";

import { headerLincsArr } from "@/data/headerLincsArr";
import { handleScroll } from "@/helpers/handleScroll";
import { SiteContext } from "@/context/SiteContext";
import Image from "next/image";
import closeIcon from "../../../../public/svg/close.svg";

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
      <Image
        src={closeIcon}
        alt=" qwe"
        width={40}
        height={40}
        className={styles.closeIcon}
        onClick={toggleMenu}
      />
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
