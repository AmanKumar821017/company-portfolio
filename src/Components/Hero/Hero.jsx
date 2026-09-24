import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import Bg1 from "../../assets/Hero1.webp";
import Bg2 from "../../assets/Hero2.webp";
import Bg3 from "../../assets/Hero3.webp";

const slides = [
  {
    id: 1,
    image: Bg1,
    alt: "Web development services",
  },
  {
    id: 2,
    image: Bg2,
    alt: "Digital solutions for businesses",
  },
  {
    id: 3,
    image: Bg3,
    alt: "SEO and digital services",
  },
];

const Hero = () => {
  return (
    <section
      className="hero-section relative h-screen min-h-screen w-full overflow-hidden bg-black"
      aria-labelledby="hero-heading"
    >
      
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        coverflowEffect={{
          stretch: 0,
          depth: 2000,
          modifier: 1,
          scale: 0.96,
          slideShadows: false,
        }}
        className="hero-swiper absolute inset-0 z-0 h-full w-full"
        aria-label="Our services"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="h-full! w-full!"
            aria-label={slide.alt}
          >
            <div
              className={`hero-slide-bg absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat ${
                slide.id === 2 ? "hero-slide-mirror" : ""
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
              role="img"
              aria-label={slide.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      
      <div
        className="
          pointer-events-none
          absolute inset-0 z-10
          bg-linear-to-r
          from-[#171717]
          via-[#2f2f2f]/95
          via-35%
          to-transparent
          opacity-90
        "
        aria-hidden="true"
      />

      
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center pt-20">
        <div className="pointer-events-auto max-w-2xl px-5 text-white md:px-10">

          
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            We Build Modern Websites For Growing Businesses
          </h1>

          
          <p className="mt-6 text-lg text-gray-300">
            Web Development, SEO and Digital Solutions for startups and
            businesses.
          </p>

          
          <Link
            to="/contact"
            className="mt-8 inline-block"
            aria-label="Get Started"
          >
            <span
              className="
                rounded-2xl
                bg-blue-700
                px-6 py-3
                font-medium
                transition
                hover:bg-blue-900
                hover:rounded-md
                cursor-pointer
              "
            >
              Get Started
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;