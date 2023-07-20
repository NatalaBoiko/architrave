import ModalForm from './ModalForm';
import { Jura } from 'next/font/google';

import styles from './modal.module.scss';

const jura = Jura({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const Application = ({ onClick }) => {
  return (
    <div className={styles.modalContent}>
      <div className={styles.iconArchitrave} />
      <svg className={styles.logo}>
        <use href="/sprite.svg#icon-logo-architrave" />
      </svg>
      <div className={styles.iconCloseBlog} />
      <button className={styles.btnClose} type="button" onClick={onClick}>
        <svg className={styles.close}>
          <use href="/sprite.svg#icon-cancelArchitrave" />
        </svg>
      </button>
      <div className={`${styles.contactsContainer} ${jura.className}`}>
        <p className={styles.text}>або зв’яжіться з нами</p>
        <a href="tel:+380503738465" className={styles.contactsAdress}>
          <svg className={styles.icon}>
            <use href="/sprite.svg#icon-tell-modal" />
          </svg>
          +380503738465
        </a>

        <a
          href="mailto:natalabojko@gmail.com"
          className={styles.contactsAdress}
        >
          <svg className={styles.icon}>
            <use href="/sprite.svg#icon-email-modal" />
          </svg>
          natalabojko@gmail.com
        </a>
      </div>
      <ModalForm />
    </div>
  );
};

export default Application;
