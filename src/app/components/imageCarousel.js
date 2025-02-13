// src/components/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import parishCenter from '../carousels/staugustineCarousel';

const ParishCenterCarousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {parishCenter.map((image, index) => (
        <div key={index}>
          <Image src={image.src} alt={image.alt} layout="responsive" width={500} height={300} />
          <p className="legend">{image.legend}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ParishCenterCarousel;
