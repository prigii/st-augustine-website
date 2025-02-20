import React from "react";
import Image from "next/image";
import logo from "/public/st-augustine/staugustine.jpg";
import image1 from "/public/st-augustine/augustine.webp";
import image2 from "/public/st-augustine/StAugustine.png";
import image3 from "/public/st-augustine/staugustine1.jpg";
import bannerImage from "/public/parish-center/church.jpg";

const SaintAugustine = () => {
  return (
    <>
      {/* Banner Section - Fixes Overlapping Issue */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src={bannerImage}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-4xl font-bold">Saint Augustine</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto mt-0 p-4">
        <h2 className="text-3xl text-center font-bold mb-8 text-yellow-500">
          About Saint Augustine of Hippo
        </h2>

        {/* Section 1 - Image Left */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-center">
          <Image
            src={logo}
            alt="Saint Augustine"
            width={256}
            height={256}
            className="w-full md:w-1/3 rounded-lg"
          />
          <div className="w-full md:w-2/3 flex items-center">
            <p className="text-center md:text-justify px-6">
              Saint Augustine of Hippo (13 November 354 – 28 August 430) was a
              Roman African, early Christian theologian and philosopher from
              Numidia whose writings influenced the development of Western
              Christianity and Western philosophy. He was the bishop of Hippo
              Regius (present-day Annaba, Algeria) in North Africa and is viewed
              as one of the most important Church Fathers in Western
              Christianity for his writings in the Patristic Era.
            </p>
          </div>
        </div>

        {/* Section 2 - Image Right */}
        <div className="mb-8 flex flex-col md:flex-row-reverse items-center justify-center">
          <Image
            src={image1}
            alt="Saint Augustine"
            width={256}
            height={256}
            className="w-full md:w-1/3 rounded-lg"
          />
          <div className="w-full md:w-2/3 flex items-center">
            <p className="text-center md:text-justify px-6">
              Augustine was born in 354 in the municipium of Thagaste (now Souk
              Ahras, Algeria) in the Roman province of Numidia. His mother,
              Monica, was a devout Christian; his father, Patricius, was a Pagan
              who converted to Christianity on his deathbed. Augustine was
              educated in North Africa and later in Rome and Milan.
            </p>
          </div>
        </div>

        {/* Section 3 - Image Left */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-center">
          <Image
            src={image2}
            alt="Saint Augustine"
            width={256}
            height={256}
            className="w-full md:w-1/3 rounded-lg"
          />
          <div className="w-full md:w-2/3 flex items-center">
            <p className="text-center md:text-justify px-6">
              Augustine&apos;s works, including &quot;The City of God,&quot;
              &quot;On Christian Doctrine,&quot; and &quot;Confessions,&quot;
              continue to be influential. His thoughts profoundly influenced the
              medieval worldview and the Protestant Reformation. He is a saint
              in the Catholic Church, the Eastern Orthodox Church, and the
              Anglican Communion.
            </p>
          </div>
        </div>

        {/* Section 4 - Image Right */}
        <div className="mb-8 flex flex-col md:flex-row-reverse items-center justify-center">
          <Image
            src={image3}
            alt="Saint Augustine"
            width={256}
            height={256}
            className="w-full md:w-1/3 rounded-lg"
          />
          <div className="w-full md:w-2/3 flex items-center">
            <p className="text-center md:text-justify px-6">
              Augustine died on 28 August 430. His feast day is celebrated on
              the anniversary of his death, 28 August. His contributions to
              theology, philosophy, and the foundations of the Church remain
              significant to this day.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaintAugustine;
