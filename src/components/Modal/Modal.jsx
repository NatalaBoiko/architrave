'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { Jura } from 'next/font/google';
import Backdrop from './Backdrop';
import ModalForm from './ModalForm';

import email from '/public/svg/email-modal.svg';
import tel from '/public/svg/tell-modal.svg';
import close from '/public/svg/cancelArchitrave.svg';
import logo from '/public/svg/logo-architrave.svg';

import styles from './modal.module.scss';

const jura = Jura({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const Modal = ({ closeModal }) => {
  useEffect(() => {
    const onKeydown = (e) => {
      if (e.code !== 'Escape') return;
      closeModal();
    };

    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, [closeModal]);

  return (
    <Backdrop closeModal={closeModal}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <div className={styles.iconArchitrave} />
        <Image src={logo} alt="icon" width={60} className={styles.logo} />
        <div className={styles.iconCloseBlog} />
        <button className={styles.btnClose} type="button" onClick={closeModal}>
          <Image src={close} alt="close" width={35} />
        </button>
        <div className={`${styles.contactsContainer} ${jura.className}`}>
          <p className={styles.text}>або зв’яжіться з нами</p>
          <div className={styles.contacts}>
            <div className={styles.contactsIcon}>
              <Image src={tel} alt="telephone" width={20} />
            </div>
            <a href="tel:+380503738465" className={styles.contactsAdress}>
              +380503738465
            </a>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contactsIcon}>
              <Image
                src={email}
                alt="email"
                width={20}
                className={styles.icon}
              />
            </div>
            <a
              href="mailto:natalabojko@gmail.com"
              className={styles.contactsAdress}
            >
              natalabojko@gmail.com
            </a>
          </div>
        </div>
        <ModalForm />
      </div>
    </Backdrop>
  );
};

export default Modal;
