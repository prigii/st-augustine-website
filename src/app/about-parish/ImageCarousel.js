"use client";

import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import parishCenter from "../carousels/parishCenter";

const ParishCenterCarousel = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto mb-8">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 3000 }}
        effect="fade"
        loop
        className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
      >
        {parishCenter.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-full flex">
            <Image
              src={image.src}
              alt={image.alt}
              width={1920}
              height={1080}
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="absolute bottom-4 text-white bg-black bg-opacity-50 px-4 py-2 rounded-md left-1/2 transform -translate-x-1/2">
              {image.legend}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ParishCenterCarousel;
