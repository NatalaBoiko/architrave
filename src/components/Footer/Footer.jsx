import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = ({ caveat }) => {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://webevery.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${caveat.className} ${styles.title}`}
      >
        <h2 className={styles.animateCharcter}>webevery.dev</h2>
        <p>made by</p>
      </Link>
    </footer>
  );
};

export default Footer;
