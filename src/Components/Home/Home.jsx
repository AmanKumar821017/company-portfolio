import React from 'react'

import Hero from "../Hero/Hero.jsx";
import Services from '../Services/Services';
import ChooseUs from '../ChooseUs/ChooseUs';
import Commitment from '../Commitment/Commitment';
import Contact from '../ContactCTA/ContactCTA.jsx';
import Footer from '../Footer/Footer';
import OurProcess from '../OurProcess/OurProcess';




const Home = () => {
  return (
    <div className=' '>
      
      <Hero />
      <Services />
      <ChooseUs />
      <Commitment />
      <OurProcess />
      <Contact />
    
     
    </div>
  )
}

export default Home
