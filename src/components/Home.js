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
import Adds from './components-home/adds';
import Adds2 from './components-home/adds2';
import WhatsAppIcon from './components-home/WhatsAppIcon';

const Home = () => {
    return (
      <div>
       
        <Heroarea />
        <TrialSection />
        <Adds/>
        <FeatureOne />
        <FaqSection />
        <Services />
        <Adds2/>
        <Pricing />
        <Testimonials />
        <Contact />
        <WhatsAppIcon /> 
      </div>
    );
}

export default Home;
