import React from "react";
import Image from "next/image";
import styles from "./Header.module.scss";

import { HeaderLinks } from "./HeaderLinks/HeaderLinks";
import Button from "../Button/Button";
import { HeaderMenuBtn } from "./HeaderMenuBtn/HeaderMenuBtn";

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderMenuBtn />
      <Image
        src="/logo.png"
        width={60}
        height={50}
        alt="logo"
        className={styles.logo}
      />

      <HeaderLinks />
      <Button className={styles.btn} type="button" title="Напишіть нам" />
    </header>
  );
};

export default Header;
