import React from 'react'

const AboutHero = ({ data }) => {
  return (
    <div className="w-full min-h-screen relative  ">

      <img
  src={data.bgimg}
  alt=""
  className="w-full h-[calc(100vh)] object-cover"
/>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center text-white max-w-4xl">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {data.title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            {data.para}
          </p>

        </div>
      </div>

    </div>
  )
}

export default AboutHero