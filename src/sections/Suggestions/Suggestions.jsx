"use client";

import { suggestionsData } from "@/data/suggestionsData";
import { CldImage } from "next-cloudinary";
// import Image from "next/image";
import React from "react";
import styles from "./Suggestions.module.scss";

const Suggestions = () => {
  return (
    <section id="suggestions" className={styles.suggestions}>
      <h2>Наші пропозиції</h2>
      <ul className={styles.suggestionsList}>
        {suggestionsData.map(({ id, src, public_id, alt, title }) => {
          return (
            <li key={id}>
              <CldImage
                src={public_id}
                alt={alt}
                fill={true}
                sizes="(min-width: 440px) 304px, 150px"
              />
              <h3>{title}</h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Suggestions;
