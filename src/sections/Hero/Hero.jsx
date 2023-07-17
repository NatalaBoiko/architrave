"use client";

import React, { useState } from "react";
import styles from "./Hero.module.scss";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";

const Hero = () => {
  const [showClick, setShowClick] = useState(false);

  const HandlerOpenClick = () => {
    setShowClick(true);
  };

  const HandlerCloseClick = () => {
    setShowClick(false);
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Творча майстерня АРХІТРАВ</h1>
          <p className={styles.heroText}>
            Creating comfort for <span className={styles.heroItem}>YOU</span>
          </p>
          <Button
            title="Залишити заявку"
            type="button"
            onClick={HandlerOpenClick}
          />
        </div>
      </div>

      {showClick && <Modal onClick={HandlerCloseClick} />}
    </section>
  );
};

export default Hero;
