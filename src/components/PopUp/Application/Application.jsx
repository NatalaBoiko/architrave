import { SiteContext } from "@/context/SiteContext";
import { Jura } from "next/font/google";
import { useContext } from "react";
import ModalForm from "../ModalForm/ModalForm";

import styles from "./Application.module.scss";

const jura = Jura({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const Application = () => {
  const { setModalVisible, modalBackdrop, setModalBackdrop } =
    useContext(SiteContext);

  return (
    <div
      className={
        modalBackdrop
          ? `${styles.modalContent} ${styles.modalContentVisible}`
          : styles.modalContent
      }
    >
      <div className={styles.iconArchitrave} />
      <svg className={styles.logo}>
        <use href="/sprite.svg#icon-logo-architrave" />
      </svg>
      <div className={styles.iconCloseBlog} />
      <button
        className={styles.btnClose}
        type="button"
        onClick={(e) => {
          // console.log(e.target);
          e.preventDefault();

          setModalBackdrop(false);

          setTimeout(() => {
            setModalVisible(false);
          }, 500);
        }}
      >
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
