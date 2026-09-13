import React from 'react'

const Technologies = ({ data }) => {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-white px-6 md:px-10 py-20">

      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-6">
        Technologies We Use
      </h1>

      <p className="max-w-3xl mx-auto text-center text-slate-300 mb-16">
        {data.technologiesPara}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">

        {data.technologies.map((tech, index) => {
          const Icon = tech.icon

          return (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-2xl border border-slate-700 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center gap-4"
            >
              <Icon className="text-5xl" />

              <h2 className="text-lg md:text-xl font-semibold text-center">
                {tech.name}
              </h2>
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Technologies