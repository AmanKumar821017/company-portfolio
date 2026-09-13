import React from 'react'

const Provide = ({ data }) => {
  return (
    <div className="w-full min-h-screen bg-zinc-300 py-20 px-10">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-slate-900 mb-6">
          {data.sectionTitle}
        </h2>

        <p className="max-w-4xl mx-auto text-slate-700 text-lg leading-relaxed">
          {data.sectionPara}
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {data.services.map((service, index) => (
          <div
            key={index}
            className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {service.title}
            </h3>

            <p className="text-slate-300 leading-relaxed">
              {service.para}
            </p>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Provide