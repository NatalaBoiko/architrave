import Image from "next/image";
import React from "react";
import styles from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <Image
        src="https://res.cloudinary.com/dtelxxva7/image/upload/v1689174904/architrave/73B7639F-729A-4E7A-A6A4-424228DD7501_fpkmwu.jpg"
        alt="skyscraper"
        width={300}
        height={300}
        className={styles.aboutImg}
      />
    </section>
  );
};

export default Gallery;
