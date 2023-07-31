"use client";

import { SiteContext } from "@/context/SiteContext";
import React, { useContext, useEffect } from "react";
import Application from "./Application/Application";
import styles from "./PopUp.module.scss";

const PopUp = () => {
  const { isModalVisible, setModalVisible, modalBackdrop, setModalBackdrop } =
    useContext(SiteContext);

  const closeModal = (e) => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    if (e.target !== e.currentTarget) {
      return;
    }

    setModalBackdrop(false);

    setTimeout(() => {
      setModalVisible(false);
    }, 500);
  };

  const onKeydown = (e) => {
    if (isModalVisible && e.code === "Escape") {
      // console.log(e.code);
      setModalBackdrop(false);

      setTimeout(() => {
        setModalVisible(false);
      }, 500);
    } else {
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [onKeydown]);

  useEffect(() => {
    if (isModalVisible) {
      // Prevent scrolling when the modal is open
      document.body.classList.add("stop-scroll");
    } else {
      // Allow scrolling when the modal is closed
      document.body.classList.remove("stop-scroll");
    }

    return () => {
      // Revert back to default when the component unmounts
      document.body.classList.remove("stop-scroll");
    };
  }, [isModalVisible]);

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
        onClick={closeModal}
      >
        <Application />
      </div>
    </div>
  );
};

export default PopUp;
