import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import slider_image_1 from "../../assets/Slider/slider1.jpg";
import slider_image_2 from "../../assets/Slider/slider2.jpg";
import slider_image_3 from "../../assets/Slider/slider3.jpg";
import slider_image_4 from "../../assets/Slider/slider4.jpg";
import slider_image_5 from "../../assets/Slider/slider5.jpg";
import slider_image_6 from "../../assets/Slider/slider6.jpg";
import slider_image_7 from "../../assets/Slider/slider7.jpg";
import slider_image_8 from "../../assets/Slider/slider8.jpg";
import slider_image_9 from "../../assets/Slider/slider9.jpg";
import slider_image_10 from "../../assets/Slider/slider10.jpg";
import slider_image_11 from "../../assets/Slider/slider11.jpg";
import slider_image_12 from "../../assets/Slider/slider12.jpg";
import slider_image_13 from "../../assets/Slider/slider13.jpg";
import slider_image_14 from "../../assets/Slider/slider14.jpg";
import slider_image_15 from "../../assets/Slider/slider15.jpg";
import slider_image_16 from "../../assets/Slider/slider16.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

export default function SliderContainer() {
  const images = [
    slider_image_1,
    slider_image_2,
    slider_image_3,
    slider_image_4,
    slider_image_5,
    slider_image_6,
    slider_image_7,
    slider_image_8,
    slider_image_9,
    slider_image_10,
    slider_image_11,
    slider_image_12,
    slider_image_13,
    slider_image_14,
    slider_image_15,
    slider_image_16,
  ];

  return (
    <div className="hover:cursor-pointer">
      <div className="absolute text-white text-3xl px-[5svw] p-[25svh] h-full w-full flex flex-col items-start justify-end break-words z-[2] pointer-events-none">
        <h1>
          <span className="text-secondary font-bold">Préparez</span> vos voyages
        </h1>
        <h2 className="max-w-[750px] my-10 pointer-events-none">
          Préparez-vous à{" "}
          <span className="text-secondary font-bold">explorer la France</span>{" "}
          avec notre sélection exclusive des meilleurs endroits à visiter.
        </h2>
        <button
          className="
            btn bg-primary text-white border-none rounded-[100px] flex-row justify-evenly items-center text-xl hover:bg-secondary
            h-[115px]
            screen-w-418:h-[25px]
            iphone-se:h-[125px]
            pointer-events-auto
            "
        >
          <p className="mx-1">Plans pour vos futurs voyages</p>
          <FontAwesomeIcon icon={faPlane} />
        </button>
      </div>
      <Swiper
        pagination={{ dynamicBullets: true }}
        initialSlide={Math.floor(Math.random() * 11)}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`slider_image_${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
