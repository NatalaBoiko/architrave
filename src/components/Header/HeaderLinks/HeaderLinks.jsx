"use client";

import React, { useContext } from "react";
import Link from "next/link";
import styles from "./HeaderLinks.module.scss";

import { headerLincsArr } from "@/data/headerLincsArr";
import { handleScroll } from "@/helpers/handleScroll";
import { SiteContext } from "@/context/SiteContext";
import Image from "next/image";
import closeIcon from "../../../../public/svg/close.svg";

export const HeaderLinks = () => {
  const { menuBtnOn, setMenuBtnOn, openMenu, closeMenu, togggleMenu } =
    useContext(SiteContext);

  // if (menuBtnOn) {
  //   window.addEventListener("click", (e) => {
  //     const target = e.target;
  //     console.log(target.className);
  //     if (!target.className.includes("visible")) {
  //       console.log("ha!");
  //       closeMenu();
  //     }
  //   });
  // } else {
  //   // window.removeEventListener("click", (e) => {
  //   //   const target = e.target;
  //   //   console.log(target.className);
  //   //   if (!target.className.includes("visible")) {
  //   //     console.log("ha!");
  //   //     closeMenu();
  //   //   }
  //   // });
  // }

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
        onClick={togggleMenu}
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
