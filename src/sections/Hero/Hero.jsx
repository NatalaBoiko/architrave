'use client';

import React, { useState } from 'react';

import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import Application from '@/components/Modal/Application';
import useModal from '@/helpers/modal';

import styles from './Hero.module.scss';

const Hero = () => {
  const { showClick, openModal, closeModal, toggleModal } = useModal();

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Творча майстерня АРХІТРАВ</h1>
          <p className={styles.heroText}>
            Creating comfort for <span className={styles.heroItem}>YOU</span>
          </p>
          <Button title="Залишити заявку" type="button" onClick={toggleModal} />
        </div>
      </div>
      {showClick && (
        <Modal onClick={closeModal}>
          <Application onClick={closeModal} />
        </Modal>
      )}
    </section>
  );
};

export default Hero;
