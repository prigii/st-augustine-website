"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import bannerImage from "../../../public/church.jpg";

const Contact = () => {
  return (
    <>
      <div className="py-4 px-10 relative">
        <Image
          src={bannerImage}
          alt="Banner"
          layout="responsive"
          width={1200}
          height={400}
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 py-4 px-10">
        <h1 className="font-bold text-4xl mb-4 text-yellow-500 text-center">
          Our Location
        </h1>
        <div className="map-container">
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

        <div className="contact-info mb-4">
          <p className="font-bold text-xl mt-4">
            St. Augustine Catholic Parish & University Chaplaincy, Juja
          </p>
          <p>
            <strong>Address</strong>: Gachororo Road, Juja, Kenya. Opposite
            JKUAT.
          </p>
          <p>
            <strong>Phone</strong>: +254 712 345 678
          </p>
          <p>
            <strong>Email</strong>: info@staugustinejuja.org
          </p>
          <p>
            <strong>Website</strong>:{" "}
            <a href="http://www.staugustinejuja.org" className="text-blue-700">
              www.staugustinejuja.org
            </a>
          </p>
        </div>

        <div className="contact-info mb-4">
          <p className="font-bold text-xl">Parish Clergy</p>
          <p>
            <strong>Parish Priest</strong>: Rev. Fr. Patrick Ndung&apos;u
          </p>
          <p>
            <strong>Assistant Parish Priest</strong>: Rev. Fr. Bernard Njuguna
          </p>
          <p>
            <strong>University (JKUAT) Chaplain</strong>: Rev. Fr. (Prof.)
            Lawrence Njoroge
          </p>
        </div>

        <div className="contact-info mb-4">
          <p className="font-bold text-xl">Archdiocese</p>
          <p> Archdiocese of Nairobi</p>
          <p> Zone A </p>
          <p> Ruiru Deanery</p>
        </div>

        <div className="contact-info mb-4">
          <p className="font-bold text-xl">Parish Office</p>
          <p>
            <strong>Office Hours</strong>: Mon - Fri 8am - 4pm
          </p>
          <p>
            <strong>Priest&apos;s Office Hours:</strong> Wed after morning
            Masses up to 12pm
          </p>
          <blockquote className="italic pl-8 mt-4 font-bold">
            &quot;You have made us for yourself, O Lord, and our heart is
            restless until it finds rest in you.&quot;
          </blockquote>
        </div>

        <div className="text-center mt-16 mb-10">
          <Link href="/donate">
            <button className="bg-yellow-700 text-white text-l font-semibold px-4 py-2 rounded hover:bg-yellow-800">
              Support our Parish
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
