"use client";

import React, { useContext } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";

import { HeaderLinks } from "./HeaderLinks/HeaderLinks";
import Button from "../Button/Button";
import { HeaderMenuBtn } from "./HeaderMenuBtn/HeaderMenuBtn";
import { SiteContext } from "@/context/SiteContext";
import Link from "next/link";
import { handleScroll } from "@/helpers/handleScroll";

const Header = () => {
  const { setModalVisible, setModalBackdrop } = useContext(SiteContext);

  const openModal = () => {
    setModalVisible(true);

    setTimeout(() => {
      setModalBackdrop(true);
    }, 100);
  };

  return (
    <header className={styles.header}>
      <HeaderMenuBtn />

      <Link href="#hero" scroll={false} onClick={handleScroll}>
        <Image
          src="/logo.png"
          width={60}
          height={50}
          alt="logo"
          className={styles.logo}
        />
      </Link>

      <HeaderLinks />
      <Button
        className={styles.btn}
        type="button"
        title="Напишіть нам"
        onClick={openModal}
      />
    </header>
  );
};

export default Header;
