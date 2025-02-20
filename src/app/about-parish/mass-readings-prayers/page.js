import React from 'react';
import Image from 'next/image';
import bannerImage from "/public/parish-center/church.jpg"; // adjust the path based on your file structure

const MassReadingsPrayers = () => {
  return (
    <>
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src={bannerImage}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">
            Mass Readings and Prayers
          </h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12">
        <p>
          Here you can find the daily mass readings and a collection of prayers
          to help you in your spiritual journey. Join us in prayer and
          reflection.
        </p>
        <div className="text-red-400 font-bold p-4">
          <p>
            <a
              href="https://www.universalis.com/africa.kenya/0/mass.htm"
              target="new"
              className="text-color-yellow-500 underline"
            >
              Get Today&apos;s Readings here
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default MassReadingsPrayers;
