"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/st-augustine/staugustine.jpg"; // Ensure path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (menu) =>
    setActiveDropdown(activeDropdown === menu ? null : menu);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white  p-4 w-full flex items-center justify-between">
      {/* Left: Logo and Title */}
      <div className="flex items-center space-x-4 ml-4">
        <Link href="/" onClick={closeMenu}>
          <Image
            src={logo}
            alt="St Augustine"
            className="h-10 w-10 rounded-full"
          />
        </Link>
        <Link href="/" className="text-2xl font-bold" onClick={closeMenu}>
          St. Augustine Catholic Parish
          <br />& University Chaplaincy, Juja
        </Link>
      </div>

      {/* Right: Navigation Links */}
      <ul className="hidden md:flex space-x-6 mr-8">
        <li>
          <Link href="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
        </li>

        {/* About Dropdown */}
        <li className="relative">
          <span
            className="nav-link cursor-pointer"
            onClick={() => toggleDropdown("about")}
          >
            About ▾
          </span>
          {activeDropdown === "about" && (
            <ul className="dropdown-menu">
              <li>
                <Link href="/about-parish" onClick={closeMenu}>
                  About the Parish
                </Link>
              </li>
              <li>
                <Link href="/about-parish/saint-augustine" onClick={closeMenu}>
                  Saint Augustine
                </Link>
              </li>
              <li>
                <Link
                  href="/about-parish/mass-readings-prayers"
                  onClick={closeMenu}
                >
                  Mass Readings & Prayers
                </Link>
              </li>
              <li>
                <Link href="/about-parish/live-streaming" onClick={closeMenu}>
                  Live Streaming
                </Link>
              </li>
              <li>
                <Link href="/about-parish/vatican-news" onClick={closeMenu}>
                  Vatican News
                </Link>
              </li>
              <li>
                <Link
                  href="/about-parish/spiritual-resources"
                  onClick={closeMenu}
                >
                  Spiritual Resources
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Outstations Dropdown */}
        <li className="relative">
          <span
            className="nav-link cursor-pointer"
            onClick={() => toggleDropdown("outstations")}
          >
            Outstations ▾
          </span>
          {activeDropdown === "outstations" && (
            <ul className="dropdown-menu">
              <li>
                <Link href="/outstations/first-mass" onClick={closeMenu}>
                  First Mass
                </Link>
              </li>
              <li>
                <Link href="/outstations/second-mass" onClick={closeMenu}>
                  Second Mass
                </Link>
              </li>
              <li>
                <Link href="/outstations/third-mass" onClick={closeMenu}>
                  Third Mass
                </Link>
              </li>
              <li>
                <Link href="/outstations/st-paul-gachororo" onClick={closeMenu}>
                  St Paul Gachororo
                </Link>
              </li>
              <li>
                <Link href="/outstations/mmg" onClick={closeMenu}>
                  Mary Mother of God Mirimaini
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Groups Dropdown */}
        <li className="relative">
          <span
            className="nav-link cursor-pointer"
            onClick={() => toggleDropdown("groups")}
          >
            Groups ▾
          </span>
          {activeDropdown === "groups" && (
            <ul className="dropdown-menu">
              <li>
                <Link href="/groups/cma" onClick={closeMenu}>
                  CMA
                </Link>
              </li>
              <li>
                <Link href="/groups/cwa" onClick={closeMenu}>
                  CWA
                </Link>
              </li>
              <li>
                <Link href="/groups/yca" onClick={closeMenu}>
                  YCA
                </Link>
              </li>
              <li>
                <Link href="/groups/ysc" onClick={closeMenu}>
                  YSC
                </Link>
              </li>
              <li>
                <Link href="/groups/pmc" onClick={closeMenu}>
                  PMC
                </Link>
              </li>
              <li>
                <Link href="/groups/choir" onClick={closeMenu}>
                  Choir
                </Link>
              </li>
              <li>
                <Link href="/groups/legion-of-mary" onClick={closeMenu}>
                  Legion of Mary
                </Link>
              </li>
              <li>
                <Link href="/groups/sacred-heart" onClick={closeMenu}>
                  Sacred Heart of Jesus
                </Link>
              </li>
              <li>
                <Link href="/groups/self-help-group" onClick={closeMenu}>
                  Self Help Group
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link href="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
        </li>

        <li className="mt-2">
          <Link
            href="/donate"
            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-yellow-700"
            onClick={closeMenu}
          >
            Donate
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden mr-4" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 right-4 bg-white shadow-lg p-4 rounded-md flex flex-col space-y-4 w-56 font-bold">
          <li>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <span
              className="cursor-pointer font-bold"
              onClick={() => toggleDropdown("about")}
            >
              About ▾
            </span>
            {activeDropdown === "about" && (
              <ul className="dropdown-menu-mobile font-bold">
                <li>
                  <Link href="/about-parish" onClick={closeMenu}>
                    About the Parish
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-parish/saint-augustine"
                    onClick={closeMenu}
                  >
                    Saint Augustine
                  </Link>
                  <li>
                    <Link
                      href="/about-parish/live-streaming"
                      onClick={closeMenu}
                    >
                      Live Streaming
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-parish/mass-readings-prayers"
                      onClick={closeMenu}
                    >
                      Mass Readings & Prayers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-parish/spiritual-resources"
                      onClick={closeMenu}
                    >
                      Spiritual Resources
                    </Link>
                  </li>
                </li>
              </ul>
            )}
          </li>
          <li>
            <span
              className="cursor-pointer font-bold"
              onClick={() => toggleDropdown("outstations")}
            >
              Outstations ▾
            </span>
            {activeDropdown === "outstations" && (
              <ul className="dropdown-menu-mobile">
                <li>
                  <Link href="/outstations/first-mass" onClick={closeMenu}>
                    First Mass
                  </Link>
                </li>
                <li>
                  <Link href="/outstations/second-mass" onClick={closeMenu}>
                    Second Mass
                  </Link>
                </li>
                <li>
                  <Link href="/outstations/third-mass" onClick={closeMenu}>
                    Third Mass
                  </Link>
                </li>
                <li>
                  <Link
                    href="/outstations/st-paul-gachororo"
                    onClick={closeMenu}
                  >
                    St Paul Gachororo
                  </Link>
                </li>
                <li>
                  <Link href="/outstations/mmg" onClick={closeMenu}>
                    Mary Mother of God Mirimaini
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <span
              className="cursor-pointer font-bold"
              onClick={() => toggleDropdown("groups")}
            >
              Groups ▾
            </span>
            {activeDropdown === "groups" && (
              <ul className="dropdown-menu-mobile">
                <li>
                  <Link href="/groups/cma" onClick={closeMenu}>
                    CMA
                  </Link>
                </li>
                <li>
                  <Link href="/groups/cwa" onClick={closeMenu}>
                    CWA
                  </Link>
                </li>
                <li>
                  <Link href="/groups/yca" onClick={closeMenu}>
                    YCA
                  </Link>
                </li>
                <li>
                  <Link href="/groups/ysc" onClick={closeMenu}>
                    YSC
                  </Link>
                </li>
                <li>
                  <Link href="/groups/pmc" onClick={closeMenu}>
                    PMC
                  </Link>
                </li>
                <li>
                  <Link href="/groups/choir" onClick={closeMenu}>
                    Choir
                  </Link>
                </li>
                <li>
                  <Link href="/groups/legion-of-mary" onClick={closeMenu}>
                    Legion of Mary
                  </Link>
                </li>
                <li>
                  <Link href="/groups/sacred-heart" onClick={closeMenu}>
                    Sacred Heart of Jesus
                  </Link>
                </li>
                <li>
                  <Link href="/groups/self-help-group" onClick={closeMenu}>
                    Self Help Group
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/donate"
              className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-yellow-700"
              onClick={closeMenu}
            >
              Donate
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
