import React from 'react'

const MissionVision = ({ data }) => {
  return (
    <div className="w-full min-h-screen bg-zinc-100 px-6 md:px-12 lg:px-20 py-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Mission */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {data.mission.title}
          </h2>

          <p className="text-slate-700 leading-relaxed">
            {data.mission.para}
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {data.vision.title}
          </h2>

          <p className="text-slate-700 leading-relaxed">
            {data.vision.para}
          </p>
        </div>

      </div>

    </div>
  )
}

export default MissionVision