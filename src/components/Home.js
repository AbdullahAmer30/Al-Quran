// // Home.js
// import React from 'react';
// import Heroarea from './components-home/Heroarea';
// import TrialSection from './components-home/trialSection';
// import FeatureOne from './components-home/FeatureOne';
// import FaqSection from './components-home/FaqSection';
// import Services from './components-home/Services';
// import Pricing from './components-home/Pricing';
// import Testimonials from './components-home/Testimonials';
// import Contact from './components-home/Contact';
// import Adds from './components-home/adds';
// import Adds2 from './components-home/adds2';
// import WhatsAppIcon from './components-home/WhatsAppIcon';

// const Home = () => {
//     return (
//       <div>
       
//         <Heroarea />
//         <TrialSection />
//         <Adds/>
//         <FeatureOne />
//         <Pricing />
//         <Services />
//         <Adds2/>
//         <FaqSection />
//         <Contact />
//         <Testimonials />
//         <WhatsAppIcon /> 
//       </div>
//     );
// }

// export default Home;

import React, { Suspense, lazy } from 'react';

// Lazy load non-critical components
const Heroarea = lazy(() => import('./components-home/Heroarea'));
const TrialSection = lazy(() => import('./components-home/trialSection'));
const FeatureOne = lazy(() => import('./components-home/FeatureOne'));
const FaqSection = lazy(() => import('./components-home/FaqSection'));
const Services = lazy(() => import('./components-home/Services'));
const Pricing = lazy(() => import('./components-home/Pricing'));
const Testimonials = lazy(() => import('./components-home/Testimonials'));
const Contact = lazy(() => import('./components-home/Contact'));
const Adds = lazy(() => import('./components-home/adds'));
const Adds2 = lazy(() => import('./components-home/adds2'));
const WhatsAppIcon = lazy(() => import('./components-home/WhatsAppIcon'));

const Home = () => {
    return (
        <Suspense fallback={<div className="loader">Loading...</div>}>
            <div>
                <Heroarea />
                <TrialSection />
                <Adds />
                <FeatureOne />
                <Pricing />
                <Services />
                <Adds2 />
                <FaqSection />
                <Contact />
                <Testimonials />
                <WhatsAppIcon />
            </div>
        </Suspense>
    );
};

export default Home;
