
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import churchImage from "../../../public/church-front.jpg"; // replace with your actual image path

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 px-4">
            <h1 className="lg:text-5xl text-3xl font-bold text-yellow-500 mb-4">
                  Welcome to St. Augustine Catholic Parish & University Chaplaincy, Juja
            </h1>
            <p className="mt-4 text-lg">
                  Join us for our Mass proceedings and community events at the heart of Juja.
                  Join us for mass, prayers, and community events.
                  We are a welcoming parish dedicated to spiritual growth and community service.
            </p>
            <div className="mt-6 space-x-4">
              <Link href="/about-parish"
                className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-700">
                      About Us
              </Link>
              <Link href="/contact"
                className="bg-white text-black border-2 border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-white">
                      Visit Us
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mb-6 px-4 mt-8 lg:mt-6">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={churchImage}
              alt="St. Augustine Catholic Parish"
            />
          </div>
        </div>
      </div>
    
  );
};

export default Hero;
