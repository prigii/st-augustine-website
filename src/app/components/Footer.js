"use client";

import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import churchImage from "/public/parish-center/church.jpg";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
      setCurrentYear(new Date().getFullYear()); // Set year dynamically on the client
  }, []);

  return (
    <footer
      className="text-white bg-yellow-500 p-8 w-full transition-transform duration-300"
      style={{
        backgroundImage: churchImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-yellow-900 bg-opacity-50 rounded-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <table className="mx-auto my-4 text-left w-auto border-collapse border border-gray-400">
            <tbody>
              <tr>
                <td className="pr-4 border border-gray-400">Address:</td>
                <td className="border border-gray-400">
                  Gachororo Road, Juja, Kenya
                </td>
              </tr>
              <tr>
                <td className="pr-4 border border-gray-400">Phone:</td>
                <td className="border border-gray-400">+254 712 345 678</td>
              </tr>
              <tr>
                <td className="pr-4 border border-gray-400">Email:</td>
                <td className="border border-gray-400">
                  info@staugustinejuja.org
                </td>
              </tr>
              <tr>
                <td className="pr-4 border border-gray-400">Office Hours:</td>
                <td className="border border-gray-400">
                  Monday - Friday, 8 AM - 4 PM
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4">
            We&apos;re here to assist you. Feel free to reach out with any
            questions or to schedule a visit.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={24} />
            </a>
          </div>

          <div className="text-center mt-8 font-semibold">
            <p>
              &copy; {currentYear ? currentYear : "Loading..."} St Augustine
              Catholic Parish & University Chaplaincy, JKUAT, Juja. All rights
              reserved.
            </p>
          </div>
          <div className="text-center mt-4 text-sm">
            <p>Designed and Developed by Seneca Systems Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
