import React from 'react';
import Image from 'next/image';
import bannerImage from '../../../public/church.jpg'; // adjust the path based on your file structure

const VaticanNews = () => {
  return (
    <>
      <div className="py-4 px-10">
        <Image
          src={bannerImage}
          alt="Banner"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">Vatican News</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12">
        <p>
          Stay updated with the latest news from the Vatican and the global Catholic Church. Find out about important events, messages from the Pope, and more.
        </p>
        <div className='text-red-400 font-bold p-4 underline'>
            <p><a href="https://www.vaticannews.va/en.html" target='new'>Get Vatican News here</a></p>
        </div>
      </div>
    </>
  );
};

export default VaticanNews;
