"use client";

import React, { useContext, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";

import { HeaderLinks } from "./HeaderLinks/HeaderLinks";
import Button from "../Button/Button";
import { HeaderMenuBtn } from "./HeaderMenuBtn/HeaderMenuBtn";
import { SiteContext } from "@/context/SiteContext";

const Header = () => {
  const { isModalVisible, setModalVisible, setModalBackdrop } =
    useContext(SiteContext);

  const toggleScroll = () => {
    console.log(scrollY);
    if (!isModalVisible) return;
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScroll);

    return () => {
      window.removeEventListener("scroll", toggleScroll);
    };
  }, [toggleScroll]);

  const openModal = () => {
    setModalVisible(true);

    setTimeout(() => {
      setModalBackdrop(true);
    }, 100);
  };

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
