
import Services from '../../All-Components/ServicesSection'
import CommitmentSection from '../../All-Components/CommitmentSection'
import WhyChooseUs from '../../All-Components/WhyChooseUs'
import OverseasEducation from '../../All-Components/OverseasEducation'
import ClientReviews from '../../All-Components/ClientReviewsSection'
import Contact from '../../All-Components/ContactSection'
import ContactSection from '../../All-Components/Contact2Section'

const Home = () => {
  return (
    <div>
        <Services />
        <CommitmentSection />
        <WhyChooseUs />
        <OverseasEducation />
        <ClientReviews />
        <Contact/>
        <ContactSection />
    </div>
  )
}

export default Home
