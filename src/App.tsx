import { useState } from "react";
import "./App.css";
import HeroSection from "./All-Components/HeroSection";
import Services from "./All-Components/ServicesSection";
import CommitmentSection from "./All-Components/CommitmentSection";
import Bgimg from "../public/backGroundImg2.jpg"

function App() {
  return (
    <>
      <div>
        <HeroSection variant="image" mediaSrc={Bgimg} />
        <Services />
        <CommitmentSection />
      </div>
    </>
  );
}

export default App;
