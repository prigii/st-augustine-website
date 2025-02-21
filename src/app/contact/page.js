"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaChurch,
  FaUserTie,
  FaClock,
  FaHandsHelping,
} from "react-icons/fa";
import bannerImage from "/public/parish-center/church.jpg";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src={bannerImage}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="max-w-6xl mx-auto py-12 px-6 md:px-10">
        <h1 className="text-3xl text-yellow-500 font-bold mb-6 text-center">
          Get in Touch
        </h1>

        {/* Contact Information (Main Section) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 p-8 rounded-lg shadow-lg">
          {/* Address */}
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-yellow-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Our Location</h3>
              <p>Gachororo Road, Juja, Kenya. Opposite JKUAT.</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <FaPhone className="text-yellow-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p>+254 712 345 678</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-yellow-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p>info@staugustinejuja.org</p>
            </div>
          </div>

          {/* Website */}
          <div className="flex items-center space-x-4">
            <FaGlobe className="text-yellow-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Website</h3>
              <a
                href="http://www.staugustinejuja.org"
                className="text-blue-700 hover:underline"
              >
                www.staugustinejuja.org
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Find Us Here
          </h2>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0844281489153!2d37.01644620429814!3d-1.0989650013166896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f463d30d01ad1%3A0x7a1fa86fe8c18f6!2sSt.%20Augustine%20Catholic%20Parish%20%26%20JKUAT%20Chaplaincy%20%2C%20Juja!5e0!3m2!1sen!2ske!4v1726121371721!5m2!1sen!2ske"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="St. Augustine Catholic Parish & JKUAT Chaplaincy, Juja"
            ></iframe>
          </div>
        </div>

        {/* Parish Information Section */}
        <div className="mt-12 space-y-6 flex flex-col items-center">
          {/* Archdiocese */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3 flex flex-col items-center text-center">
            <FaChurch className="text-yellow-500 text-4xl mb-2" />
            <h3 className="text-lg font-semibold">Archdiocese</h3>
            <p>Archdiocese of Nairobi</p>
            <p>Zone A</p>
            <p>Ruiru Deanery</p>
          </div>

          {/* Parish Clergy */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3 flex flex-col items-center text-center">
            <FaUserTie className="text-yellow-500 text-4xl mb-2" />
            <h3 className="text-lg font-semibold">Parish Clergy</h3>
            <p>
              <strong>Parish Priest:</strong> Rev. Fr. Patrick Ndung&apos;u
            </p>
            <p>
              <strong>Assistant Parish Priest:</strong> Rev. Fr. Bernard Njuguna
            </p>
            <p>
              <strong>University Chaplain:</strong> Rev. Fr. (Prof.) Lawrence
              Njoroge
            </p>
          </div>

          {/* Parish Office Hours */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3 flex flex-col items-center text-center">
            <FaClock className="text-yellow-500 text-4xl mb-2" />
            <h3 className="text-lg font-semibold">Parish Office</h3>
            <p>
              <strong>Office Hours:</strong> Mon - Fri 8am - 4pm
            </p>
            <p>
              <strong>Priest&apos;s Office Hours:</strong> Wed after morning Masses
              up to 12pm
            </p>
          </div>

          {/* Support Button */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3 flex flex-col items-center text-center">
            <FaHandsHelping className="text-yellow-500 text-4xl mb-2" />
            <h3 className="text-lg font-semibold">Support Our Parish</h3>
            <Link href="/donate">
              <button className="bg-yellow-700 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-yellow-800 shadow-md mt-2">
                Donate Now
              </button>
            </Link>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="italic text-center text-gray-600 mt-12 font-bold">
          &quot;You have made us for yourself, O Lord, and our heart is restless
          until it finds rest in you.&quot;
        </blockquote>
      </div>
    </>
  );
};

export default Contact;
