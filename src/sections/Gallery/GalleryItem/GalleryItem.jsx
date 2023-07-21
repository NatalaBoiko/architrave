"use client";

import React, { useState } from "react";

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

  const item = galleryData.map(({ id, url }) => {
    if (url) {
      return (
        <SwiperSlide key={id}>
          <Image src={url} alt="qwe" width={300} height={300} />
        </SwiperSlide>
      );
    } else {
      return;
    }
  });
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[FreeMode, Navigation, Thumbs, Mousewheel, Keyboard]}
        loop={true}
        // pagination={{
        //   clickable: true,
        //   dynamicBullets: true,
        // }}
        mousewheel={true}
        // style={{
        //   "--swiper-navigation-color": "#fff",
        //   "--swiper-pagination-color": "#fff",
        // }}
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
        slidesPerView={4}
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

// export const GalleryItem = async () => {
//   console.log(galleryData);
// export const item = await galleryData.map(({ id, url }) => {
//   if (url) {
//     return (
//       <li key={id} className={styles.item}>
//         <Image src={url} alt="qwe" fill={true} />
//       </li>
//     );
//   } else {
//     return;
//   }
// });
//   return <>{item}</>;
// };
