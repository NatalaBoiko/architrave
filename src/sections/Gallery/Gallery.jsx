import Image from "next/image";
import React from "react";
import styles from "./Gallery.module.scss";
import { GalleryItem } from "./GalleryItem/GalleryItem";

const Gallery = () => {
  return (
    <section id="gallery" className={styles.gallery}>
      <GalleryItem />
    </section>
  );
};

export default Gallery;
