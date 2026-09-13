import React from 'react'
import AboutLayout from '../AboutUscomponents/AboutLayout'
import { aboutData } from '../AboutUscomponents/AboutData'

const About = () => {
  return (
    <div>
      <AboutLayout 
      data={aboutData} />
    </div>
  )
}

export default About
