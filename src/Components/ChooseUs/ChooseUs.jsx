import React from 'react'
import Edu from '../../assets/Education.webp'
import Star from '../../assets/Startup.webp'
import Ecome from '../../assets/Ecommerce.webp'
import Real from '../../assets/Realstate.webp'

const LatestWork = () => {
  return (

    <div className='w-full min-h-90 bg-gray-400 overflow-hidden'>

  <div>
    <h1 className='flex justify-center text-2xl text-zinc-800 font-semibold mt-10 text-center px-4'>
      Our Team Deliver High-Quality Solutions
    </h1>
  </div>

  <div className='flex flex-wrap justify-center gap-6 p-6 md:p-10'>

    {work.map((item) => (
      <div key={item.id} className='relative'>

        <img
          src={item.img}
          alt=""
          className='w-75 md:w-[320px] h-105 rounded-2xl object-cover opacity-90'
        />

        <h1 className='absolute bottom-6 left-6 z-10 text-white text-xl font-semibold'>
          {item.title}
        </h1>

      </div>
    ))}

  </div>

</div>
    
    
  )
}

export default LatestWork


const work=[
  {
    id: '1',
    img: Edu ,
    title: 'Education'
  },
  
  {
    id: '2',
    img: Star ,
    title: 'Startups & Local Businesses'
  },
  {
    id: '3',
    img: Ecome ,
    title: 'E-commerce'
  },
  {
    id: '4',
    img: Real ,
    title: 'Real Estate'
  }
]