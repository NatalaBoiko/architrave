'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

import { HeaderLinks } from './HeaderLinks/HeaderLinks';
import Button from '../Button/Button';
import { HeaderMenuBtn } from './HeaderMenuBtn/HeaderMenuBtn';
import Modal from '../Modal/Modal';
import Application from '../Modal/Application';
import useModal from '@/helpers/modal';

const Header = () => {
  const { showClick, openModal, closeModal, toggleModal } = useModal();

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
        onClick={toggleModal}
      />
      {showClick && (
        <Modal onClick={closeModal}>
          <Application onClick={closeModal} />
        </Modal>
      )}
    </header>
  );
};

export default Header;
