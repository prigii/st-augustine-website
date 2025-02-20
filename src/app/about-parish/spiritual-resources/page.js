import React from 'react';
import Image from 'next/image';
import bannerImage from "/public/parish-center/church.jpg"; // adjust the path based on your file structure

const SpiritualResources = () => {
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
          <h1 className="text-white text-4xl font-bold">Spiritual Resources</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12">
        <p>
          Access a variety of spiritual resources to support your faith journey,
          including articles, videos, and other materials.
        </p>
        <div className="text-red-400 font-semibold p-4">
          <p>
            <a
              href="https://www.universalis.com/static/mass/orderofmass4.htm"
              target="new"
              className="text-color-yellow-500 underline"
            >
              The Canon Order of Mass
            </a>
          </p>
        </div>
        <div className="text-red-400 font-semibold p-4">
          <p>
            <a
              href="https://www.youtube.com/channel/UCbrIxeH2TSwEc8eVwwMGv8w"
              target="new"
              className="text-color-yellow-500 underline"
            >
              Pause for Faith with Fr. Stephen Wang
            </a>
          </p>
        </div>
        <div className="text-red-400 font-semibold p-4">
          <p>
            <a
              href="https://airmaria.com/2017/09/05/st-teresa-of-calcutta-a-reflection-on-eucharistic-adoration/"
              target="new"
              className="text-color-yellow-500 underline"
            >
              Mother Teresa’s Reflection on Adoration of Jesus in the Most
              Blessed Sacrament
            </a>
          </p>
        </div>
        <div className="text-red-400 font-semibold p-4">
          <p>
            <a
              href="https://parish.rcdow.org.uk/tottenham/wp-content/uploads/sites/100/2020/03/Prayer-not-alone-.pdf"
              target="new"
              className="text-color-yellow-500 underline"
            >
              Prayer not alone
            </a>
          </p>
        </div>
        <div className="text-red-400 font-semibold p-4">
          <p>
            <a
              href="https://www.loyolapress.com/retreats/say-yes-to-god/"
              target="new"
              className="text-color-yellow-500 underline"
            >
              The 3-Minute Retreat
            </a>
          </p>
        </div>
        <div className="text-red-400 font-semibold p-4">
          <p>
            <a
              href="https://www.youtube.com/@CapuchinTv"
              target="new"
              className="text-color-yellow-500 underline"
            >
              Capuchin TV
            </a>
          </p>
        </div>
        <div className="text-red-400 font-semibold p-4">
          <p>
            <a
              href="https://www.praymorenovenas.com/"
              target="new"
              className="text-color-yellow-500 underline"
            >
              All Novena Prayers
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SpiritualResources;
