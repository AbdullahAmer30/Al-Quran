// import React, { Component } from 'react';
// import homedata from '../../data/homedata.json';

// class Testimonials extends Component {
//   render() {
//    let publicUrl = process.env.PUBLIC_URL
//    let imgattr = 'image'
//    return (
//       <section id="testimonials" className="p-175px-tb md-p-80px-tb position-relative testimonials">
//          <div className="container">
//             <div className="row">
//                <div className="rotate-heading">
//                   <h2>Clients<br/>Review</h2>
//                </div>
//                <div className="col-lg-8 offset-lg-2 swiper-container testimonialSwiper p-50px-b">
//                   <div className="swiper-wrapper">
//                      { homedata.testimonial.map( ( data, i ) => {

//                      return <div key={i} className="single-testimonial swiper-slide">
//                         <div className="row">
//                            <div className="col-lg-2 col-md-3">
//                               <img className="rounded-circle" src={publicUrl+data.imgurl} alt={imgattr}/>
//                            </div>
//                            <div className="col-lg-10 col-md-9">
//                               <p>{data.content}</p>
//                               <h5>{data.client}</h5>
//                               <p className="designation">{data.designation}</p>
//                               <p className="ratings">
//                                  <i className="icofont-ui-rating"></i>
//                                  <i className="icofont-ui-rating"></i>
//                                  <i className="icofont-ui-rating"></i>
//                                  <i className="icofont-ui-rating"></i>
//                                  <i className="icofont-ui-rating"></i>
//                               </p>
//                            </div>
//                         </div>
//                      </div>
//                      } ) }

//                   </div>
//                   <div className="swiper-pagination"></div>
//                </div>
//             </div>
//          </div>
//       </section>
//    );
//   }
// }

// export default Testimonials;

// import React, { useState, useEffect } from 'react';
// import homedata from '../../data/homedata.json';
// import './Testimonials.css'; // Make sure to define styles for the carousel here

// const Testimonials = () => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     // Move to the next testimonial every 3 seconds (auto-slide)
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveIndex((prevIndex) => (prevIndex + 1) % homedata.testimonial.length);
//         }, 3000); // Change slide every 3 seconds

//         return () => clearInterval(interval); // Clear the interval when component unmounts
//     }, []);

//     const handleNext = () => {
//         setActiveIndex((prevIndex) => (prevIndex + 1) % homedata.testimonial.length);
//     };

//     const handlePrev = () => {
//         setActiveIndex(
//             (prevIndex) => (prevIndex - 1 + homedata.testimonial.length) % homedata.testimonial.length
//         );
//     };

//     return (
//         <section id="testimonials" className="p-175px-tb md-p-80px-tb position-relative testimonials">
//             <div className="container">
//                 <div className="row">
//                     <div className="rotate-heading">
//                         <h2>Clients<br />Review</h2>
//                     </div>
//                     <div className="col-lg-8 offset-lg-2 testimonial-carousel">
//                         <div className="testimonial-container">
//                             {homedata.testimonial.map((data, i) => (
//                                 <div
//                                     key={i}
//                                     className={`single-testimonial ${activeIndex === i ? 'active' : ''}`}
//                                 >
//                                     <div className="row">
//                                         <div className="col-lg-2 col-md-3">
//                                             <img
//                                                 className="rounded-circle"
//                                                 src={process.env.PUBLIC_URL + data.imgurl}
//                                                 alt={data.client}
//                                                 loading="lazy"
//                                             />
//                                         </div>
//                                         <div className="col-lg-10 col-md-9">
//                                             <p>{data.content}</p>
//                                             <h5>{data.client}</h5>
//                                             <p className="designation">{data.designation}</p>
//                                             <p className="ratings">
//                                                 <i className="icofont-ui-rating"></i>
//                                                 <i className="icofont-ui-rating"></i>
//                                                 <i className="icofont-ui-rating"></i>
//                                                 <i className="icofont-ui-rating"></i>
//                                                 <i className="icofont-ui-rating"></i>
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="carousel-navigation">
//                             <button onClick={handlePrev} className="prev-btn">Prev</button>
//                             <button onClick={handleNext} className="next-btn">Next</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Testimonials;

// import React, { useState, useEffect } from 'react';
// import homedata from '../../data/homedata.json';
// import './Testimonials.css'; // Ensure to create this CSS file

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const testimonials = homedata.testimonial;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // Auto-slide every 5 seconds

//     return () => clearInterval(interval); // Clear on unmount
//   }, [testimonials.length]);

//   return (
//     <section id="testimonials" className="p-175px-tb md-p-80px-tb position-relative testimonials">
//       <div className="container">
//         <div className="row">
//           <div className="rotate-heading">
//             <h2>Clients<br />Review</h2>
//           </div>
//           <div className="col-lg-8 offset-lg-2 p-50px-b">
//             <div className="testimonial-wrapper">
//               {testimonials.map((data, i) => (
//                 <div
//                   key={i}
//                   className={`single-testimonial ${i === currentIndex ? 'active' : ''}`}
//                 >
//                   <div className="row align-items-center">
//                     <div className="col-lg-2 col-md-3">
//                       <img
//                         className="rounded-circle"
//                         src={process.env.PUBLIC_URL + data.imgurl}
//                         alt="testimonial"
//                       />
//                     </div>
//                     <div className="col-lg-10 col-md-9">
//                       <p>{data.content}</p>
//                       <h5>{data.client}</h5>
//                       <p className="designation">{data.designation}</p>
//                       <p className="ratings">
//                         {[...Array(5)].map((_, idx) => (
//                           <i key={idx} className="icofont-ui-rating"></i>
//                         ))}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="testimonial-controls text-center mt-4">
//               {testimonials.map((_, idx) => (
//                 <button
//                   key={idx}
//                   className={`dot ${idx === currentIndex ? 'active' : ''}`}
//                   onClick={() => setCurrentIndex(idx)}
//                 ></button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React from 'react';
import homedata from '../../data/homedata.json';

const Testimonials = () => {
  const publicUrl = process.env.PUBLIC_URL;
  const imgattr = 'image';

  return (
    <section id="testimonials" className="p-175px-tb md-p-80px-tb position-relative testimonials">
      <div className="container">
        <div className="row">
          <div className="rotate-heading">
            <h2>Clients<br />Review</h2>
          </div>
          <div className="col-lg-8 offset-lg-2 swiper-container testimonialSwiper p-50px-b">
            <div className="swiper-wrapper">
              {homedata.testimonial.map((data, i) => (
                <div key={i} className="single-testimonial swiper-slide">
                  <div className="row">
                    <div className="col-lg-2 col-md-3">
                      <img className="rounded-circle" src={publicUrl + data.imgurl} alt={imgattr} />
                    </div>
                    <div className="col-lg-10 col-md-9">
                      <p>{data.content}</p>
                      <h5>{data.client}</h5>
                      <p className="designation">{data.designation}</p>
                      <p className="ratings">
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
