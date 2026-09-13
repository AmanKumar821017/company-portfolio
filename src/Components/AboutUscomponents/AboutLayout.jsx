import React from 'react'
import AboutHero from './AboutHero'
import AboutStory from './AboutStory'
import MissionVision from './MissionVision'
import WhyChooseUs from './WhyChooseUs'

const AboutLayout = ({data}) => {
  return (
    <div>
      <AboutHero data={data.hero} />
      <AboutStory data={data.story}/>
      <MissionVision data={data.common}/>
      <WhyChooseUs data={data.whyChooseUs} />
    </div>
  )
}

export default AboutLayout
