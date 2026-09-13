import React from "react";
import img from "../../assets/Contact.webp";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="relative w-full min-h-115 overflow-hidden opacity-90">

      {/* Background Image */}
      <img
        src={img}
        alt="Contact"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full min-h-115 flex flex-row items-center justify-center gap-4 sm:gap-8 md:gap-16 px-4 sm:px-6 md:px-15 text-white">

        {/* Left */}
        <div className="w-1/2 max-w-xl">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Transforming Businesses Through Digital Innovation.
          </h1>
        </div>

        {/* Right */}
        <div className="w-1/2 max-w-2xl">
          <p className="text-xs sm:text-sm md:text-xl leading-relaxed text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores libero id vel placeat possimus quas eaque dolores
            deleniti blanditiis, iste quasi assumenda, facere ex sit fugit
            laudantium.
          </p>

          <Link to = '/contact' >
          <button className="mt-14 md:mt-16 flex items-center justify-center w-28 md:w-32 h-10 md:h-11 rounded-lg font-xl bg-blue-500 hover:bg-blue-600 cursor-pointer transition-all duration-300">
            Get In Touch
          </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Contact;