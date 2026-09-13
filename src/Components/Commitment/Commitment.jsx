import React from 'react'
// import Bg from '../../assets/Commitment1.webp'

const Commitment = () => {
  return (

    <div className='relative w-full bg-[#020617] '>

     

      {/* Overlay */}
      <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-0 px-10 py-10 text-white'>

        {/* Left Content */}
        <div className='sm:w-200 mb-10 '>

          <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold text-white/90 leading-tight'>
            Your Trusted <br /> IT Partner
          </h1>

          <p className='mt-5 text-sm sm:text-base md:text-lg text-white/70 leading-relaxed'>
            Our priority is client satisfaction, performance and
            long-term reliability.<br /> We focus on delivering
            high-quality solutions and digital products.
          </p>

        </div>

        {/* Right Card */}
        <div className='w-full max-w-xl bg-blue-900/20 backdrop-blur-md rounded-2xl p-6 md:p-8'>

          <h1 className='text-sm sm:text-base md:text-lg leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quaerat illo, officiis quisquam deleniti qui nemo recusandae
            quidem iste rem maxime!
          </h1>

        </div>

      </div>

    </div>
  )
}

export default Commitment