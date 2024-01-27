import React from "react";
import { galleryData } from "@/data/galleryData";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from "./GalleryItem.module.scss";

export const item = galleryData.map(({ id, url }) => {
  if (url) {
    return (
      <SwiperSlide key={id}>
        <Image
          src={url}
          alt="Архітрав галерея"
          width={300}
          height={300}
          sizes="50vw"
          // className={styles.swiperImg}
        />
      </SwiperSlide>
    );
  } else {
    return;
  }
});
