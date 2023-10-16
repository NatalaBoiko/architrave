"use client";

import React, { useContext } from "react";

import Button from "@/components/Button/Button";

import styles from "./Hero.module.scss";
import { SiteContext } from "@/context/SiteContext";
import PopUp from "@/components/PopUp/PopUp";

const Hero = () => {
  const { setModalVisible, setModalBackdrop } = useContext(SiteContext);

  const openModal = () => {
    setModalVisible(true);

    setTimeout(() => {
      setModalBackdrop(true);
    }, 100);
  };

  return (
    <section className={styles.hero} id="hero">
      <h1 className={styles.heroTitle}>
        Творча майстерня
        <span>АРХІТРАВ</span>
      </h1>

      <div className={styles.heroTextWrapper}>
        <h2 className={styles.heroText}>
          Creating comfort for <span className={styles.heroItem}>YOU</span>
        </h2>
      </div>

      <Button
        title="Залишити заявку"
        type="button"
        onClick={openModal}
        className={styles.heroBtn}
      />
    </section>
  );
};

export default Hero;
