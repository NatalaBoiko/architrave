import { suggestionsData } from "@/data/suggestionsData";
import Image from "next/image";
import React from "react";
import styles from "./Suggestions.module.scss";

const Suggestions = () => {
  return (
    <section id="suggestions" className={styles.suggestions}>
      <h2>Наші пропозиції</h2>
      <ul className={styles.suggestionsList}>
        {suggestionsData.map(({ id, src, alt, title }) => {
          return (
            <li key={id}>
              <Image
                src={src}
                alt={alt}
                fill={true}
                sizes="(min-width: 440px) 304px, 150px"
                title={title}
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
