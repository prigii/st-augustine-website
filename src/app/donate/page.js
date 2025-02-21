import React from "react";
import Image from "next/image";
import mpesa from "/public/logos/mpesa-logo1.png";
import caritas from "/public/logos/caritas-logo.png";
import kcb from "/public/logos/kcb-logo.png";
import ParishCenterCarousel from "../about-parish/ImageCarousel";

const Donate = () => {
  return (
    <section id="about" className="px-6 md:px-10">
      {/* Image Carousel */}
      <ParishCenterCarousel />

      {/* Donation Section */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl text-yellow-500 font-bold mb-6 text-center">
          Donate
        </h1>
        <p className="mb-6 text-center">
          Thank you for considering a donation to St. Augustine Catholic Parish
          Juja. Your generous contributions help us continue our mission and
          support our community.
        </p>

        <h2 className="text-2xl font-semibold text-center mb-4">
          Donation Methods
        </h2>

        {/* Donation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-5 text-center">
            <Image
              src={mpesa}
              alt="MPESA Logo"
              width={88}
              height={64}
              className="mx-auto mb-2"
            />
            <h3 className="text-lg font-semibold">MPESA</h3>
            <p>Paybill Number: 522533</p>
            <p>Account Number: 888888</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-5 text-center">
            <Image
              src={kcb}
              alt="KCB Logo"
              width={88}
              height={64}
              className="mx-auto mb-2"
            />
            <h3 className="text-lg font-semibold">KCB Bank</h3>
            <p>Direct Transfer to KCB Account Number: XXXXXXX</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-5 text-center">
            <Image
              src={caritas}
              alt="Caritas Logo"
              width={120}
              height={64}
              className="mx-auto mb-2"
            />
            <h3 className="text-lg font-semibold">Caritas Microfinance Bank</h3>
            <p>Paybill Number: 8998990</p>
            <p>Account Number: 308600</p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="mt-10 bg-gray-100 p-6 rounded-lg text-center shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">
            📍 <strong>Physical Address:</strong> St. Augustine Catholic Parish & University Chaplaincy,
            Juja. Gachororo Street, Opposite JKUAT.
          </p>
          <p className="mb-2">
            📬 <strong>Postal Address:</strong> P.O. Box 386, Kalimoni, Juja, Kenya
          </p>
          <p className="mb-2">
            📞 <strong>Phone:</strong> +254 712 345 678
          </p>
          <p>
            ✉️ <strong>Email:</strong> info@staugustinejuja.org
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donate;
