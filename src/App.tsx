import { useState } from "react";
import "./App.css";
import HeroSection from "./All-Components/HeroSection";
import Services from "./All-Components/ServicesSection";
import CommitmentSection from "./All-Components/CommitmentSection";
import Bgimg from "../public/backGroundImg2.jpg";
import WhyChooseUs from "./All-Components/WhyChooseUs";
import OverseasEducation from "./All-Components/OverseasEducation";
import ClientReviews from "./All-Components/ClientReviewsSection";
import Contact from "./All-Components/ContactSection";
import ContactSection from "./All-Components/Contact2Section";
import Footer from "./componets-reusable/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* <div>
        <HeroSection variant="image" mediaSrc={Bgimg} />
        <Services />
        <CommitmentSection />
        <WhyChooseUs />
        <OverseasEducation />
        <ClientReviews />
        <Contact/>
        <ContactSection />
        <Footer/>
      </div> */}
      <div className="flex flex-col min-h-screen">
        <HeroSection variant="image" mediaSrc={Bgimg} />
        <main className="flex-grow container mx-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
