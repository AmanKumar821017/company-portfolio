import React from 'react'
import ServicesLayout from '../ServiceComponents/ServicesLayout'
import { servicesData } from '../ServiceComponents/ServiceData'

const SEO = () => {
  return (
    <div>

      <ServicesLayout
        data={servicesData.seo}
      />

    </div>
  )
}

export default SEO
