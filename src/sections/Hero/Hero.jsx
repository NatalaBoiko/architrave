"use client";

import React, { useContext } from "react";

import Button from "@/components/Button/Button";

import styles from "./Hero.module.scss";
import { SiteContext } from "@/context/SiteContext";
import PopUp from "@/components/PopUp/PopUp";

const Hero = () => {
  const { isModalVisible, setModalVisible, modalBackdrop, setModalBackdrop } =
    useContext(SiteContext);

  const openModal = () => {
    setModalVisible(true);

    setTimeout(() => {
      setModalBackdrop(true);
    }, 100);
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Творча майстерня АРХІТРАВ</h1>
          <p className={styles.heroText}>
            Creating comfort for <span className={styles.heroItem}>YOU</span>
          </p>

          <Button title="Залишити заявку" type="button" onClick={openModal} />
        </div>
      </div>

      {isModalVisible && <PopUp />}
    </section>
  );
};

export default Hero;
