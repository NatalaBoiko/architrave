import React from "react";
import { galleryData } from "@/data/galleryData";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

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
        />
      </SwiperSlide>
    );
  } else {
    return;
  }
});
