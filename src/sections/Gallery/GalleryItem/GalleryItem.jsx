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
  Pagination,
  Mousewheel,
  Keyboard,
  EffectCube,
  Autoplay,
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
    <>
      <Swiper
        // // slidesPerView={3}
        // // centeredSlides={true}
        // // autoplay={{
        // //   delay: 2500,
        // //   disableOnInteraction: false,
        // // }}
        loop={true}
        // pagination={{
        //   clickable: true,
        //   dynamicBullets: true,
        // }}
        // navigation={true}
        // modules={[Pagination, Navigation]}
        // // className="mySwiper"

        // slidesPerView={"auto"}
        // // spaceBetween={30}
        // // pagination={{
        // //   clickable: true,
        // // }}
        // // modules={[Pagination]}
        // className="mySwiper"

        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {item}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {item}
      </Swiper>
    </>
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
