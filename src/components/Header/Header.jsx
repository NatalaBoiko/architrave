"use client";

import React from "react";
import Button from "../Button/Button";
import styles from "./Header.module.scss";
import { headerLincsArr } from "@/data/headerLincsArr";
import Link from "next/link";
import { handleScroll } from "@/helpers/handleScroll";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/logo.png"
        width={60}
        height={50}
        alt="logo"
        className={styles.logo}
      />
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
      <Button
        className={styles.btn}
        type="button"
        title="Напишіть нам"
        onClick={() => {
          console.log("the button is clicked");
        }}
      />
    </header>
  );
};

export default Header;
