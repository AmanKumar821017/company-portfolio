import React from 'react'

const AboutStory = ({ data }) => {
  return (
    <div className="w-full min-h-screen bg-zinc-300 px-6 md:px-12 lg:px-20 py-16 md:py-24">

      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
          {data.title}
        </h1>

        <p className="text-sm md:text-lg lg:text-xl text-slate-700 leading-relaxed">
          {data.para}
        </p>

      </div>

    </div>
  )
}

export default AboutStory