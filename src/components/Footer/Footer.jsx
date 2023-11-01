import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = ({ caveat }) => {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://webevery.dev/"
        target="_blank"
        // rel="noopener noreferrer"
        className={caveat.className}
      >
        webevery.dev
      </Link>
    </footer>
  );
};

export default Footer;
