"use client";

import { SiteContext } from "@/context/SiteContext";
import React, { useContext } from "react";
import Application from "./Application/Application";
import styles from "./PopUp.module.scss";

const PopUp = () => {
  const { isModalVisible, setModalVisible, modalBackdrop, setModalBackdrop } =
    useContext(SiteContext);

  return (
    <div
      className={
        isModalVisible ? styles.modalWrapperVisible : styles.modalWrapper
      }
    >
      <div
        className={
          modalBackdrop
            ? `${styles.backDrop} ${styles.backDropVisible}`
            : `${styles.backDrop}`
        }
        onClick={(e) => {
          console.log(e.target);
          console.log(e.currentTarget);
          if (e.target !== e.currentTarget) {
            return;
          }

          setModalBackdrop(false);

          setTimeout(() => {
            setModalVisible(false);
          }, 500);
        }}
      >
        <Application />
      </div>
    </div>
  );
};

export default PopUp;
