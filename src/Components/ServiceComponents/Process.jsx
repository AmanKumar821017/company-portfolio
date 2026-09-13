import React, { useState } from 'react'

const Process = ({ data }) => {
  const [activeStep, setActiveStep] = useState(null)

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-zinc-900 text-white px-5 md:px-8 lg:px-10 py-16 lg:py-20 gap-12 lg:gap-45">

      {/* Left Section */}
      <div className="w-full text-center lg:text-left lg:w-1/3 lg:ml-15 lg:sticky lg:top-20 h-fit">

        <h1 className=" text-3xl md:text-4xl font-semibold mb-8 lg:mb-16">
          {data.processTitle}
        </h1>

       <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
          {data.processPara}
        </p>

      </div>

      {/* Right Section */}
      <div className="w-full lg:w-2/3 lg:ml-20 lg:mr-12">

        {data.process.map((step, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl mb-5 overflow-hidden border border-slate-700"
          >

            {/* Title */}
            <div
              onClick={() =>
                setActiveStep(
                  activeStep === index ? null : index
                )
              }
              className="p-4 md:p-5 lg:p-6 cursor-pointer flex justify-between items-center"
            >

              <div className="flex items-center gap-3 md:gap-4">

                <div className="text-xs md:text-sm lg:text-base text-blue-400 font-medium whitespace-nowrap">
                  Step {index + 1}
                </div>

                <h2 className="text-base md:text-lg lg:text-xl font-medium">
                  {step.title}
                </h2>

              </div>

              <span className="text-2xl md:text-3xl font-light">
                {activeStep === index ? "−" : "+"}
              </span>

            </div>

            {/* Description */}
            {activeStep === index && (
              <div className="px-4 md:px-5 lg:px-6 pb-4 md:pb-5 lg:pb-6 text-slate-300 leading-relaxed text-sm md:text-base">
                {step.para}
              </div>
            )}

          </div>
        ))}

      </div>

    </div>
  )
}

export default Process