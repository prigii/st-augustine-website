import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Changed import path
import { Autoplay, EffectFade } from "swiper/modules"; // Changed import path
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import parishCenter from "../carousels/parishCenter"; // Changed import path

const ParishCenterCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 3000 }}
      effect="fade"
      loop
    >
      {parishCenter.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            layout="responsive"
            width={500}
            height={300}
          />
          <p className="legend">{image.legend}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ParishCenterCarousel;
