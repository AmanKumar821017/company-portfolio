import React from 'react'
import Hero from './Hero'
import Provide from './Provide'
import Technologies from './Technologies'
import Process from './Process'



const ServicesLayout = ({ data }) => {
  return (
    <div className=''>
      <Hero data={data.hero} />
      <Provide data={data} />
      <Technologies data={data} />
      <Process data={data} />
      
    </div>
  )
}

export default ServicesLayout
