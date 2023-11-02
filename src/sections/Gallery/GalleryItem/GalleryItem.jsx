"use client";

import React, { useEffect, useState } from "react";

import { galleryData } from "@/data/galleryData";
import Image from "next/image";
import styles from "./GalleryItem.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "./styles.css";

// import required modules
import {
  Navigation,
  Mousewheel,
  Keyboard,
  Thumbs,
  FreeMode,
} from "swiper/modules";
import { CldImage } from "next-cloudinary";

export const GalleryItem = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const item = galleryData?.map(({ id, url }) => {
    return (
      <SwiperSlide key={id}>
        <CldImage src={url} alt="Архітрав галерея" fill={true} sizes="50vw" />
      </SwiperSlide>
    );
  });

  const handleThumbsSwiper = (swiper) => {
    if (swiper !== null) {
      setThumbsSwiper(swiper);
    }
  };

  useEffect(() => {
    handleThumbsSwiper;
  }, []);

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Keyboard]}
        className="mySwiper2"
      >
        {item}
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        // onSwiper={handleThumbsSwiper}
        onClick={handleThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        mousewheel={true}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {item}
      </Swiper>
    </div>
  );
};
