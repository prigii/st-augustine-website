// src/components/Donate.js
import React from "react";
import Image from "next/image";
import donationsImage from "../../../public/donations.jpg"; // Adjust the path based on your file structure

const Donate = () => {
  return (
    <section className="flex flex-col md:flex-row items-center p-8 bg-gray-100 mb-0">
      {/* Left Image Section */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="w-full h-96 overflow-hidden rounded-lg shadow-md relative">
          <Image
            src={donationsImage}
            alt="Donate and Support"
            className="w-full h-full object-cover"
            width={400}
            height={300}
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="md:w-1/2 text-center md:text-left md:pl-8">
        <h2 className="text-3xl font-bold mb-4">Donate and Support</h2>
        <p className="mb-6">
          Your generous donations and volunteer efforts help us continue our
          mission of serving the Juja community.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="/donate"
            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-700"
          >
            Donate
          </a>
          <a
            href="/donate"
            className="bg-white text-black border border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-white"
          >
            Support Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Donate;
