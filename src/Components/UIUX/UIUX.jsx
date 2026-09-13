import React from 'react'
import ServicesLayout from '../ServiceComponents/ServicesLayout'
import { servicesData } from '../ServiceComponents/ServiceData'

const UIUX = () => {
  return (
    <div>

      <ServicesLayout
        data={servicesData.uiux}
      />
    </div>
  )
}

export default UIUX
