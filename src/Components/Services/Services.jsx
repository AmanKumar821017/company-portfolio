
import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="relative w-full min-h-screen overflow-x-hidden bg-slate-950" aria-labelledby="services-heading">
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between px-5 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 lg:py-24 gap-10 lg:gap-12">
        <div className="w-full lg:max-w-xl">
          <h1 id="services-heading" className="text-white max-w-xl text-2xl sm:text-3xl md:text-3xl font-medium leading-relaxed md:py-20 md:mt-25">
            We provide solutions to help businesses grow online with powerful strategies and creative user experiences.
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 w-full lg:max-w-4xl">
          {servicesData.map((service) => (
            <article key={service.id} className="bg-slate-900 backdrop-blur-md border-2 border-white/20 rounded-2xl p-5 sm:p-6 text-white transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-100 mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
              <Link to={service.path} className="inline-block px-5 py-2 bg-blue-200 text-black rounded-lg font-medium hover:bg-blue-300 cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-900" aria-label={`Learn more about ${service.title}`}>
                Learn More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

const servicesData = [
  {
    id: "1",
    title: "Web Development",
    description: "We build fast, responsive, and modern websites for startups and businesses.",
    path: "/web-development",
  },
  {
    id: "2",
    title: "SEO Optimization",
    description: "Improve your Google ranking and grow your online presence with smart SEO strategies.",
    path: "/seo",
  },
  {
    id: "3",
    title: "UI/UX Design",
    description: "We create clean, modern, and user-friendly interfaces for better user experience.",
    path: "/uiux-design",
  },
  {
    id: "5",
    title: "Data Analytics",
    description: "Transform business data into valuable insights for smarter decisions and growth.",
    path: "/data-analytics",
  },
];

