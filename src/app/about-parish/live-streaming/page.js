import React from 'react';
import Image from 'next/image';
import bannerImage from "/public/parish-center/church.jpg"; // adjust the path based on your file structure

const LiveStreaming = () => {
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
          <h1 className="text-white text-4xl font-bold ">Live Streaming</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12">
        <p className="mt-4 mb-4">
          Join our live streaming of mass services and other parish events. Stay
          connected with our community from wherever you are.
        </p>
        {/* <h1 className="text-2xl font-bold mb-4 mt-4">Live Streaming</h1> */}
        <div className="relative w-full pb-[56.25%] mb-10">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/w6UssRg3AXA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default LiveStreaming;
