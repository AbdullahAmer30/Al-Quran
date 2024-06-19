import React from 'react';
import Blog from './components-home/Blog';
import Contact from './components-home/Contact';
import Feature from './components-home/Feature';
import FeatureOne from './components-home/FeatureOne';
import FeatureTwo from './components-home/FeatureTwo';
import Heroarea from './components-home/Heroarea';
import Pricing from './components-home/Pricing';
import Testimonials from './components-home/Testimonials';
import Services from './components-home/Services';
//import Preface from './components-home/Preface';
import Howitworks from './components-home/Howitworks';
//import Screenshots from './components-home/Screenshots';
import WhatsAppIcon from './components-home/WhatsAppIcon';// Import WhatsAppIcon component
import TrialSection from './components-home/trialSection';
import FaqSection from './components-home/FaqSection';

const Home = () => {
    return (
      <div>
        <Heroarea />
        {/* <Feature /> */}
        <TrialSection/>
        <FeatureOne />
        <FaqSection/>
        {/* <FeatureTwo /> */}
        <Services />
        {/* <Howitworks /> */}
        {/* <Screenshots /> */}
        {/*   */}
        <Pricing />
        <Testimonials />
        {/* <Blog /> */}
        <Contact />
        <WhatsAppIcon /> {/* Add WhatsAppIcon component here */}
      </div>
    );
}

export default Home;
