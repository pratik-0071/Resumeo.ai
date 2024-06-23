import { useState,useEffect } from "react";
import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import Footer from "../Components/Footer.jsx";

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default HomePage