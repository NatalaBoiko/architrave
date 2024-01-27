"use client";

import React, { useEffect, useState } from "react";
import styles from "./GalleryItem.module.scss";
import { item } from "./Item";

// Import Swiper React components
import { Swiper } from "swiper/react";

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
    // if (window.innerWidth < 1280) {
    //   setSlidesPerView(4);
    // } else

    if (window.innerHeight < 500 && window.innerWidth < 1280) {
      setSlidesPerView(5);
    } else if (window.innerWidth < 1280) {
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
        className="mySwiperTop"
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
        className="mySwiperBottom"
      >
        {item}
      </Swiper>
    </div>
  );
};
