"use client";

import { SiteContext } from "@/context/SiteContext";
import React, { useCallback, useContext, useEffect } from "react";
import styles from "./PopUp.module.scss";

const PopUp = ({ children }) => {
  const { isModalVisible, setModalVisible, modalBackdrop, setModalBackdrop } =
    useContext(SiteContext);

  // isModalVisible
  //   ? (document.body.style.overflow = "hidden")
  //   : (document.body.style.overflow = "auto");

  function closeModal(e) {
    // console.log(e.target);
    // console.log(e.currentTarget);
    if (e.target !== e.currentTarget) {
      return;
    }
    setModalBackdrop(false);

    setTimeout(() => {
      setModalVisible(false);
    }, 500);
  }

  const onKeydown = useCallback(
    (e) => {
      if (isModalVisible && e.code === "Escape") {
        // console.log(e.code);
        setModalBackdrop(false);

        setTimeout(() => {
          setModalVisible(false);
        }, 500);
      } else {
        return;
      }
    },
    [isModalVisible, setModalBackdrop, setModalVisible]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [onKeydown]);

  useEffect(() => {
    if (isModalVisible) {
      // Prevent scrolling when the modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Allow scrolling when the modal is closed
      document.body.style.overflow = "auto";
    }

    return () => {
      // Revert back to default when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, [isModalVisible]);

  return (
    <>
      {isModalVisible && (
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
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
