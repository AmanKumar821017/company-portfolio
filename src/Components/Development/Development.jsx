import React from 'react'
import ServicesLayout from '../ServiceComponents/ServicesLayout'
import { servicesData } from '../ServiceComponents/ServiceData'



const Development = () => {
  return (
    <div >

      <ServicesLayout
        data={servicesData.development}
      />


    </div>
  )
}

export default Development
