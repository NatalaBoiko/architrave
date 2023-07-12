import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://webevery.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>webevery.dev</h2>
        made by
      </Link>
    </footer>
  );
};

export default Footer;
