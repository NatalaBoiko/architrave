"use client";

import React from "react";
import styles from "./ToTopBtn.module.scss";

const ToTopBtn = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    let backToTop = document.getElementById("backToTop");
    if (!backToTop) return;
    if (
      document.body.scrollTop >= 200 ||
      document.documentElement.scrollTop >= 200
    ) {
      backToTop.className = styles.toTopBtn;
    } else {
      backToTop.className = styles.toTopBtnHidden;
      //   setTimeout(() => {
      //     backToTop.style.display = "none";
      //   }, 1000);
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0;
  }

  return (
    <button id="backToTop" onClick={topFunction} className={scrollFunction()}>
      <svg>
        <use href="./sprite.svg#icon-circle-up"></use>
      </svg>
    </button>
  );
};

export default ToTopBtn;
