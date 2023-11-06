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
import "./styles.css";

// import required modules
import {
  Navigation,
  Mousewheel,
  Keyboard,
  Thumbs,
  FreeMode,
} from "swiper/modules";

export const GalleryItem = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(0);

  // Function to update slidesPerView based on viewport width
  const updateSlidesPerView = () => {
    if (window.innerWidth < 1500) {
      setSlidesPerView(4);
    } else {
      setSlidesPerView(5); // Default value for larger screens
    }
  };

  // Initial setup
  useEffect(() => {
    updateSlidesPerView();

    // Add an event listener to update slidesPerView when the window is resized
    window.addEventListener("resize", updateSlidesPerView);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  const item = galleryData.map(({ id, url }) => {
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

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[FreeMode, Navigation, Thumbs, Keyboard]}
        loop={true}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        {item}
      </Swiper>
      <Swiper
        modules={[FreeMode, Navigation, Thumbs, Mousewheel, Keyboard]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        mousewheel={true}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        {item}
      </Swiper>
    </div>
  );
};
