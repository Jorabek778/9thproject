import React from 'react'
import Navbar from '../Companents/Navbar'
import Hero from '../Companents/Hero'
import Pricing from '../Companents/Pricing'
import Testimonial from '../Companents/Testimonial'
import SectionFaq from '../Companents/SectionFaq'
import Contact from '../Companents/Contact'
import Footer from '../Companents/Footer'

const Homepage = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <Pricing />
    <Testimonial />
    <SectionFaq />
    <Contact />
    <Footer />
    </div>
  )
}

export default Homepage