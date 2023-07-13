import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://webevery.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className={caveat.className}
      >
        <h2>webevery.dev</h2>
        made by
      </Link>
    </footer>
  );
};

export default Footer;
