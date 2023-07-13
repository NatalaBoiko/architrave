"use client";

import React from "react";
import Link from "next/link";
import styles from "./HeaderLinks.module.scss";

import { headerLincsArr } from "@/data/headerLincsArr";
import { handleScroll } from "@/helpers/handleScroll";

export const HeaderLinks = () => {
  return (
    <ul className={styles.headerLinks}>
      {headerLincsArr.map(({ id, title, href }) => {
        return (
          <li key={id}>
            <Link href={href} scroll={false} onClick={handleScroll}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
