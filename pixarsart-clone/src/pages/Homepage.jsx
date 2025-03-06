import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import ServicesSection from '../components/ServicesSection'
import FloatingTechStack from '../components/FloatingTechStack'
import ExpandableImageGrid from '../components/ExpandableImageGrid'
import Button from '../components/Button'

const Homepage = () => {
  return (
    <div className='global-font'>
      <Hero />
      <About />
      <ServicesSection />
      <FloatingTechStack />
      {/* <ExpandableImageGrid /> */}
      <Button />
    </div>
  )
}

export default Homepage
