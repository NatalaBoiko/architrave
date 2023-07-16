'use client';

import React from 'react';
import styles from './Button.module.scss';

const Button = ({ className, title, type, onClick }) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      // onClick={() => {
      //   console.log("the button is clicked");
      // }}
    >
      {title}
    </button>
  );
};

export default Button;
