

import React from 'react'
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className='relative w-full min-h-screen overflow-x-hidden bg-slate-950 '>

      {/* Overlay content */}
      <div className='relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between px-6 md:px-12 py-16 gap-10'>

        {/* Heading */}
        <h1 className='text-white max-w-xl text-2xl md:text-3xl font-medium leading-relaxed md:py-20 md:mt-25'>
          We provide solutions to help businesses grow online with powerful strategies and creative user experiences.
        </h1>

        {/* Cards Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:py-20 gap-6 w-full min-h-60 lg:max-w-4xl'>
          {servicesData.map((service) => (
            <div
              key={service.id}
              className='bg-slate-900 backdrop-blur-md border-2 border-white/20 rounded-2xl p-6 text-white cursor-pointer hover:scale-105 transition-all duration-300'
            >
              <h1 className='text-2xl font-bold mb-4'>
                {service.title}
              </h1>

              <p className='text-gray-100 mb-6 leading-relaxed'>
                {service.description}
              </p>

              <Link
                to={service.path}
                className='px-5 py-2 bg-blue-200 text-black rounded-lg font-medium hover:bg-blue-300 cursor-pointer transition-all'
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services

const servicesData = [
  {
    id: '1',
    title: 'Web Development',
    description: 'We build fast, responsive, and modern websites for startups and businesses.',
    path: '/web-development'
  },
  {
    id: '2',
    title: 'SEO Optimization',
    description: 'Improve your Google ranking and grow your online presence with smart SEO strategies.',
    path: '/seo',
  },
  {
    id: '3',
    title: 'UI/UX Design',
    description: 'We create clean, modern, and user-friendly interfaces for better user experience.',
    path: '/uiux-design',
  },
  {
    id: '5',
    title: 'Data Analytics',
    description: 'Transform business data into valuable insights for smarter decisions and growth.',
    path: '/data-analytics',
  },
]
