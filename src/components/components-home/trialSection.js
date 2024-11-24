import React from 'react'
import './trialSection.css'
import homedata from '../../data/homedata.json';
import Quran1 from './quran1.jpg'
const TrialSection = () => {
  return (
    <>
    {/* <div className="App">
      <header className="App-header">
        <img src="quran-icon.png" alt="Quran Icon" className="App-logo" />
        <h1>Learn Quran Online By Following These Steps</h1>
      </header>
      <div className="content">
        <div className="step">
          <h2>Step 1</h2>
          <h3>Book Trial to Start Learning Online</h3>
          <p>
            Get a free 3-day trial to experience Quran learning with us. Fill out the form and you are all set for the classes.
          </p>
        </div>
        <div className="step">
          <h2>Step 2</h2>
          <h3>Schedule Your Online Quran Classes</h3>
          <p>Schedule your online Quran classes with the best Quran scholars our academy has to offer.</p>
        </div>
        <div className="step">
          <h2>Step 3</h2>
          <h3>Get Enrolled In the Quran Course</h3>
          <p>
            We don't only teach the Quran but we also teach life according to Sunnah and Hadith.
          </p>
        </div>
        <a className='book-btn'href='#'>Book Your Free Trial Now!</a>
      </div>
    </div> */}
    <img className='BismillAllahLogo' src="/assets/img/BismillAllah.jpg"/>
    <section className="p-80px-tb parallax bg-color opacity-5" style={{backgroundImage: `url(${Quran1})`}}>
         <div className="container">
            <div className="row">
               <div className="col-sm-12 offset-sm-0">
                  <div className="text-center m-30px-b">
                     <h2 className='heading'>{homedata.trials.Heading}</h2>
                  </div>
               </div>
            </div>
            <div className="row justify-content-md-center">
               { homedata.trials.main.map( ( data, i ) => {
                  return <div key={i} className="col-lg-4 col-md-6">
                     <div className="single-pricing text-center m-10px-tb">
                        <div className="pricing-head p-60px-lr lg-p-30px-lr">
                           <div className="pricing-head-text">
                              <div className="package-price">
                                 <span className="subheading-size">{data.Subheading}</span>
                              </div>
                              {/* <div className="package-name">
                                 <h5>{data.title}</h5>
                              </div> */}
                           </div>
                           <span className="wave"></span>
                           <span className="wave"></span>
                           <span className="wave"></span>
                        </div>
                        <div className="pricing-body p-50px-lr lg-p-30px-lr">
                           <ul>
                              
                                 <li key={i}>{data.content}</li>
                               
                           </ul>
                        </div>
                        
                     </div>
                     
                  </div>
               } ) }
               <div className="pricing-footer p-60px-lr lg-p-30px-lr">
                           <a href="#" className="trial-btn">Book Your Free Trial Now!</a>
                </div>

            </div>
         </div>
      </section>
    </>
  )
}

export default TrialSection
