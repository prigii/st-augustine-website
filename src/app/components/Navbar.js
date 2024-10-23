"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/staugustine.jpg'; // adjust the path based on your file structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOutstationsOpen, setIsOutstationsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const outstationsRef = useRef(null);
  const aboutRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleAboutDropdown = () => setIsAboutDropdownOpen(!isAboutDropdownOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsAboutDropdownOpen(false);
  };
  const toggleOutstations = () => setIsOutstationsOpen(!isOutstationsOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
    if (outstationsRef.current && !outstationsRef.current.contains(event.target)) {
      setIsOutstationsOpen(false);
    }
    if (aboutRef.current && !aboutRef.current.contains(event.target)) {
      setIsAboutDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow- p-4 text-black w-full top-0 z-50 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center justify-between container mx-auto md:w-auto ml-20">
        <div className="flex items-center">
          <Image href='/' src={logo} alt="St Augustine" className="h-10 w-10 mr-3" />
          <div href='/' className="text-2xl font-bold leading-tight">
            St. Augustine Catholic Parish &<br />University Chaplaincy, Juja
          </div>
        </div>
        <button className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>
      <ul className={`md:flex justify-center space-x-6 ${isOpen ? "block" : "hidden"} md:block w-full md:w-auto mt-4 md:mt-0 mr-8`}>
        <li className="text-center md:text-left relative">
          <Link href="/"
             className="block text-l font-semibold py-2 md:py-0 custom-underline" onClick={closeMenu}>Home
          </Link>
        </li>
        <li className="text-center md:text-left relative">
          <button onClick={toggleAboutDropdown} className="block text-l font-semibold py-2 md:py-0 custom-underline">About</button>
          {isAboutDropdownOpen && (
            <ul ref={aboutRef} className="absolute bg-white shadow-lg rounded-md mt-2 z-10 w-56">
              <li>
                <Link href="/about-parish"
                  className="block px-4 py-2 text-black hover:bg-gray-200" onClick={closeMenu}>About the Parish
                </Link>
              </li>
              <li>
                <Link href="/saint-augustine"
                   className="block px-4 py-2 text-black hover:bg-gray-200" onClick={closeMenu}>Saint Augustine
                </Link>
              </li>
              <li>
                <Link href="/mass-readings-prayers"
                  className="block px-4 py-2 text-black hover:bg-gray-200" onClick={closeMenu}>Mass Readings & Prayers
                </Link>
              </li>
              <li>
                <Link href="/live-streaming"
                  className="block px-4 py-2 text-black hover:bg-gray-200" onClick={closeMenu}>Live Streaming
                </Link>
              </li>
              <li>
                <Link href="/vatican-news"
                  className="block px-4 py-2 text-black hover:bg-gray-200" onClick={closeMenu}>Vatican News
                </Link>
              </li>
              <li>
                <Link href="/spiritual-resources"
                   className="block px-4 py-2 text-black hover:bg-gray-200" onClick={closeMenu}>Spiritual Resources
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="text-center md:text-left relative">
          <button onClick={toggleOutstations} className="block text-l font-semibold py-2 md:py-0 custom-underline">Outstations</button>
          {isOutstationsOpen && (
            <ul ref={outstationsRef} className="absolute bg-white shadow-lg rounded-md mt-2 z-10 w-56">
              <li>
                <Link href="/outstations/first-mass"
                  className="block px-4 py-2 text-black hover:bg-gray-200" onClick={() => { closeMenu(); setIsOutstationsOpen(false); }}>First Mass
                </Link>
              </li>
              <li>
                <Link href="/outstations/second-mass"
                  className="block px-4 py-2 text-black hover:bg-gray-200" onClick={() => { closeMenu(); setIsOutstationsOpen(false); }}>Second Mass
                </Link>
              </li>
              <li>
                <Link href="/outstations/third-mass"
                   className="block px-4 py-2 text-black hover:bg-gray-200" onClick={() => { closeMenu(); setIsOutstationsOpen(false); }}>Third Mass
                </Link>
              </li>
              <li>
                <Link href="/outstations/st-paul-gachororo"
                   className="block px-4 py-2 text-black hover:bg-gray-200" onClick={() => { closeMenu(); setIsOutstationsOpen(false); }}>St Paul Gachororo
                </Link>
              </li>
              <li>
                <Link href="/outstations/mary-mother-of-god-mirimaini"
                   className="block px-4 py-2 text-black hover:bg-gray-200" onClick={() => { closeMenu(); setIsOutstationsOpen(false); }}>Mary Mother of God Mirimaini
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="text-center md:text-left relative">
          <button onClick={toggleDropdown} className="block text-l font-semibold py-2 md:py-0 custom-underline">Groups</button>
          {isDropdownOpen && (
            <ul ref={dropdownRef} className="absolute bg-white shadow-lg rounded-md mt-2 z-10 w-56">
              <li>
                <Link href="/groups/cma"
                   className="block px-4 py-2 text-black hover:bg-gray-200" onClick={() => { closeMenu(); setIsDropdownOpen(false); }}>CMA
                </Link>
              </li>
              <li>
                <Link href="/groups/cwa"
                   className="block px-4 py-2 text-black hover:bg-gray-200" onClick={() => { closeMenu(); setIsDropdownOpen(false); }}>CWA
                </Link>
              </li>
              <li>
                <Link href="/groups/yca"
                   className="block px-4 py-2 text-black hover:bg-gray-200" onClick={() => { closeMenu(); setIsDropdownOpen(false); }}>YCA
                </Link>
              </li>
              <li>
                <Link href="/groups/ysc"
                   className="block px-4 py-2 text-black hover:bg-gray-200" onClick={() => { closeMenu(); setIsDropdownOpen(false); }}>YSC
                </Link>
              </li>
              <li>
                <Link href="/groups/pmc"
                   className="block px-4 py-2 text-black hover:bg-gray-200" onClick={() => { closeMenu(); setIsDropdownOpen(false); }}>PMC
                </Link>
              </li>
              <li>
                <Link href="/groups/choir"
                   className="block px-4 py-2 text-black hover:bg-gray-200" onClick={() => { closeMenu(); setIsDropdownOpen(false); }}>Choir
                </Link>
              </li>
              <li>
                <Link href="/groups/legion-of-mary"
                   className="block px-4 py-2 text-black hover:bg-gray-200" onClick={() => { closeMenu(); setIsDropdownOpen(false); }}>Legion of Mary
                </Link>
              </li>
              <li>
                <Link href="/groups/sacred-heart-of-jesus"
                   className="block px-4 py-2 text-black hover:bg-gray-200" onClick={() => { closeMenu(); setIsDropdownOpen(false); }}>Sacred Heart of Jesus
                </Link>
              </li>
              <li>
                <Link href="/groups/self-help-group"
                   className="block px-4 py-2 text-black hover:bg-gray-200" onClick={() => { closeMenu(); setIsDropdownOpen(false); }}>Self Help Group
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="text-center md:text-left relative">
          <Link href="/contact"
             className="block text-l font-semibold py-2 md:py-0 custom-underline" onClick={closeMenu}>Contact
          </Link>
        </li>
        <li>
            <button className='lg:ml-24 md:ml-0 sm:ml-0'>
              <Link
                href="/donate"
                className="bg-gray-900 text-white block text-l font-semibold px-4 py-4 rounded md:py-2 hover:bg-yellow-700"
                onClick={closeMenu}
              >
                Donate
              </Link>
            </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
