"use client";

import Image from "next/image";
import React from "react";
import hero from "public/heroBg.jpg";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContainer}>
        <Image
          priority
          src={hero}
          alt="background hero"
          className={styles.heroImg}
          layout="fill"
          objectFit="cover"
          objectPosition="center bottom"
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Творча майстерня АРХІТРАВ</h1>
          <p className={styles.heroText}>
            Creating comfort for <span className={styles.heroItem}>YOU</span>
          </p>
          <button type="button" className={styles.heroBtn}>
            Залишити заявку
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
