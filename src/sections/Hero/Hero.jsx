'use client';

import React from 'react';
import styles from './Hero.module.scss';
import Button from '@/components/Button/Button';

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Творча майстерня АРХІТРАВ</h1>
          <p className={styles.heroText}>
            Creating comfort for <span className={styles.heroItem}>YOU</span>
          </p>
          <Button title="Залишити заявку" type="button" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
