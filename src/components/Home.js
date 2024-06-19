// Home.js
import React from 'react';
import Heroarea from './components-home/Heroarea';
import TrialSection from './components-home/trialSection';
import FeatureOne from './components-home/FeatureOne';
import FaqSection from './components-home/FaqSection';
import Services from './components-home/Services';
import Pricing from './components-home/Pricing';
import Testimonials from './components-home/Testimonials';
import Contact from './components-home/Contact';
import WhatsAppIcon from './components-home/WhatsAppIcon'; // Make sure this import is correct

const Home = () => {
    return (
      <div>
        <Heroarea />
        <TrialSection />
        <FeatureOne />
        <FaqSection />
        <Services />
        <Pricing />
        <Testimonials />
        <Contact />
        <WhatsAppIcon /> {/* Ensure this component is correctly imported */}
      </div>
    );
}

export default Home;
