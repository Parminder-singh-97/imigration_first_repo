
import "./App.css";
import HeroSection from "./All-Components/HeroSection";

import Bgimg from "../public/indianPassport2.webp";

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
