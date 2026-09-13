import React from 'react'
import ServicesLayout from '../ServiceComponents/ServicesLayout'
import { servicesData } from '../ServiceComponents/ServiceData'

const DataAnalytics = () => {
  return (
    <div>

      <ServicesLayout
        data={servicesData.dataanalytics}

      />

    </div>
  )
}

export default DataAnalytics
