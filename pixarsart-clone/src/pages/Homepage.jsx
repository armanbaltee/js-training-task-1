import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import ServicesSection from '../components/ServicesSection'
import FloatingTechStack from '../components/FloatingTechStack'
import ExpandableImageGrid from '../components/ExpandableImageGrid'

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <ServicesSection />
      <FloatingTechStack />
      <ExpandableImageGrid />
    </>
  )
}

export default Homepage
