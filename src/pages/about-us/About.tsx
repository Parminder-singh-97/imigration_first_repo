import React from 'react'
import CommitmentSection from '../../All-Components/CommitmentSection'
import OurServices from '../../All-Components/ServicesSection'
import WhyChooseUs from '../../All-Components/WhyChooseUs'
import ClientReviews from '../../All-Components/ClientReviewsSection'
import  Contact from '../../All-Components/ContactSection' 
// import ContactSection from '../../All-Components/Contact2Section'

const About = () => {
  return (
    <div>
        <CommitmentSection />
        <OurServices />
        {/* <WhyChooseUs /> */}
        {/* <OverseasEducation /> */}
        <ClientReviews />
        {/* <ContactSection /> */}
        <Contact/>
    </div>
  )
}

export default About
