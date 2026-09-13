import React from 'react'

const Hero = ({ data }) => {
  return (
    <div className="w-full min-h-screen flex bg-slate-950 justify-center items-center px-10 ">

      <div className="w-[70%] h-[70vh] relative rounded-3xl overflow-hidden">
        <img
          src={data.bgimg}
          alt=""
          className="w-full h-full object-cover scale-x-[-1]"
        />

        <div className='absolute inset-0  flex flex-col justify-center items-center text-white'>
          <h1 className='text-5xl font-bold'>{data.title}</h1>
          <p className='mt-4 text-lg'>{data.para}</p>
        </div>

      </div>
    </div>
  )
}

export default Hero

