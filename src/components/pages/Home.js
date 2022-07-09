import React from 'react';
import '../../App.css';
import Carousel from "../Carousel";
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Carousel />
      <Footer />
    </>
  );
}

export default Home;