import React from 'react'

const WhyChooseUs = ({ data }) => {
  return (
    <div className="w-full min-h-screen bg-zinc-100 px-6 md:px-12 lg:px-20 py-20">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-6">
          {data.title}
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {data.points.map((point, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-lg font-medium text-slate-800">
                ✓ {point}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default WhyChooseUs