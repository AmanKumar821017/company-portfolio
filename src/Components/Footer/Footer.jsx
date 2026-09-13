import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 text-white border-t border-white/10">

      {/* Main Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 px-6 sm:px-8 lg:px-10 py-10">

        {/* Company Info */}
        <div className="lg:mt-10 lg:ml-5">
          <h1 className=" mb-2">
            <Logo />
          </h1>

          <p className="text-gray-400 leading-6">
            Selaqui, Dehradun, Uttarakhand - 248001
          </p>
        </div>


        {/* Services */}
        <div className="lg:ml-5">
          <h2 className="text-xl font-semibold mb-3">
            Services
          </h2>

          <div className="flex flex-col gap-2">

            <Link
              to="/web-development"
              className="inline-block w-fit text-gray-400 hover:text-white transition"
            >
              Web Development
            </Link>

            <Link
              to="/seo"
              className="inline-block w-fit text-gray-400 hover:text-white transition"
            >
              SEO
            </Link>

            <Link
              to="/uiux-design"
              className="inline-block w-fit text-gray-400 hover:text-white transition"
            >
              UI/UX Design
            </Link>

            <Link
              to="/data-analytics"
              className="inline-block w-fit text-gray-400 hover:text-white transition"
            >
              Data Analytics
            </Link>

          </div>
        </div>


        {/* Company */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Company
          </h2>

          <div className="flex flex-col gap-2">

            <Link
              to="/about"
              className="inline-block w-fit text-gray-400 hover:text-white transition"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="inline-block w-fit text-gray-400 hover:text-white transition"
            >
              Contact Us
            </Link>

          </div>
        </div>


        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Contact Us
          </h2>

          <div className="flex flex-col gap-3">

            {/* Phone */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 text-gray-400"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full text-black">
                <FaPhone className="text-sm" />
              </span>

              <span className="inline-block w-fit hover:text-white hover:cursor-pointer transition">
                +91 98765 43210
              </span>
            </a>


            {/* Email */}
            <a
              href="mailto:info@rinfine.com"
              className="flex items-center gap-3 text-gray-400"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full text-black">
                <FaEnvelope className="text-sm" />
              </span>

              <span className="inline-block w-fit hover:text-white hover:cursor-pointer transition">
                info@rinfine.com
              </span>
            </a>


            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-400"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full text-black">
                <FaWhatsapp className="text-lg" />
              </span>

              <span className="inline-block w-fit hover:text-white hover:cursor-pointer transition">
                WhatsApp
              </span>
            </a>

          </div>
        </div>

      </div>


      {/* Bottom Footer */}
      <div className="border-t border-white/15 px-6 sm:px-8 lg:px-10 py-8">
  <div className="flex ml-15  gap-6 text-sm text-gray-400">

    {/* Copyright - Left */}
    <p className="whitespace-nowrap">
      © 2026 Rinfine. All Rights Reserved.
    </p>

    {/* Policies - Right */}
    <div className="flex ml-140 items-center gap-8 whitespace-nowrap">
      <span className="hover:text-white hover:cursor-pointer transition">
        Privacy & Policy
      </span>

      <span className="hover:text-white hover:cursor-pointer transition">
        Information Security Policy
      </span>

      <span className="hover:text-white hover:cursor-pointer transition">
        Terms & Conditions
      </span>
    </div>

  </div>
</div>

    </footer>
  );
};

export default Footer;


// 