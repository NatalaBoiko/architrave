"use client";

import React from "react";
import styles from "./ToTopBtn.module.scss";

const ToTopBtn = () => {
  function scrollFunction() {
    let backToTop = document.getElementById("toTop");
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

  document.addEventListener("scroll", scrollFunction);

  const topFunction = () => {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0;
  };

  return (
    <button id="toTop" onClick={topFunction} className={scrollFunction()}>
      <svg>
        <use href="./sprite.svg#icon-circle-up"></use>
      </svg>
    </button>
  );
};

export default ToTopBtn;
