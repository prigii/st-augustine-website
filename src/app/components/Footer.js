"use client";

import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear()); // Set year dynamically on the client
  }, []);

  return (
    <footer className="bg-yellow-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-yellow-400" />
            Gachororo Road, Juja, Kenya
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaPhoneAlt className="text-yellow-400" />
            +254 712 345 678
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope className="text-yellow-400" />
            info@staugustinejuja.org
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaClock className="text-yellow-400" />
            Office Hours: Mon - Fri, 8 AM - 4 PM
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/about-parish" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-yellow-400">
                Outstations
              </a>
            </li>
            <li>
              <a href="/donate" className="hover:text-yellow-400">
                Donate
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-yellow-900 rounded-full hover:bg-yellow-400"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-yellow-900 rounded-full hover:bg-yellow-400"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-yellow-900 rounded-full hover:bg-yellow-400"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-yellow-900 rounded-full hover:bg-yellow-400"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 border-t border-yellow-600 pt-4">
        <p>
          &copy; {currentYear ? currentYear : "Loading..."} St. Augustine
          Catholic Parish & University Chaplaincy, JKUAT, Juja. All rights
          reserved.
        </p>
        <p className="text-sm mt-2">
          Designed and Developed by{" "}
          <span className="font-semibold text-yellow-400">
            Seneca Systems Ltd.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
