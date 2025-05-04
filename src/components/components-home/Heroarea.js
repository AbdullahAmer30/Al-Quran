// import React, { useState, useEffect } from 'react';
// import homedata from '../../data/homedata.json';
// import './section.css';

// const Heroarea = () => {
//     const [shouldAnimate, setShouldAnimate] = useState(false);

//     useEffect(() => {
//         // Set shouldAnimate to true after component mounts
//         setShouldAnimate(true);
//     }, []);

//     return (
//         <section className="hero-bg circle-wrap">
//             <div className="circle x1"></div>
//             <div className="circle x2"></div>
//             <div className="circle x3"></div>
//             <div className="circle x4"></div>
//             <div className="circle x5"></div>
//             <div className="circle x6"></div>
//             <div className="circle x7"></div>
//             <div className="circle x8"></div>
//             <div className="circle x9"></div>
//             <div className="circle x10"></div>
//             <div className="container">
//                 <div className={`row full-height align-items-center ${shouldAnimate ? 'animate-left' : ''}`}>
//                     <div className="col-md-6 p-100px-t p-50px-b md-p-10px-b">
//                         <h2 className="text-capitalize m-25px-b">{homedata.heroarea.title}</h2>
//                         <p className="m-25px-b">{homedata.heroarea.content}</p>
//                         <div className="hero-btn-wrapper ">
//                             {/* <a href={homedata.heroarea.btn1url} className="btn btn-default animated-btn">{homedata.heroarea.btn1label}</a> */}
//                             {/* <a className="btn btn-default btn-default-outline animated-btn" href={homedata.heroarea.btn2url}>{homedata.heroarea.btn2label}</a> */}
//                         </div>
//                     </div>
//                     <div className={`col-md-6 p-100px-t p-50px-b md-p-10px-t ${shouldAnimate ? 'moveUpDown' : ''}`}>
//                         <img className="hero-mock" src={process.env.PUBLIC_URL + homedata.heroarea.imgurl1} alt="Hero mockup" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Heroarea;

import React, { useState, useEffect, useMemo } from 'react';
import homedata from '../../data/homedata.json';
import './section.css';

const Heroarea = () => {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    // Only run once when the component mounts
    useEffect(() => {
        setShouldAnimate(true);
    }, []);

    // Memoize the hero content to avoid recalculating it on every render
    const heroContent = useMemo(() => {
        return {
            title: homedata.heroarea.title,
            content: homedata.heroarea.content,
            imgurl1: process.env.PUBLIC_URL + homedata.heroarea.imgurl1
        };
    }, []); // Only recompute when `homedata.heroarea` changes

    return (
        <section className="hero-bg circle-wrap">
            {/* Circles decoration */}
            {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className={`circle x${i + 1}`} />
            ))}
            <div className="container">
                <div className={`row full-height align-items-center ${shouldAnimate ? 'animate-left' : ''}`}>
                    <div className="col-md-6 p-100px-t p-50px-b md-p-10px-b">
                        <h2 className="text-capitalize m-25px-b">{heroContent.title}</h2>
                        <p className="m-25px-b">{heroContent.content}</p>
                        <div className="hero-btn-wrapper">
                            {/* Add actual buttons here if necessary */}
                        </div>
                    </div>
                    <div className={`col-md-6 p-100px-t p-50px-b md-p-10px-t ${shouldAnimate ? 'moveUpDown' : ''}`}>
                        <img
                            className="hero-mock"
                            src={heroContent.imgurl1}
                            alt="Hero mockup"
                            loading="lazy" // Lazy load the image to avoid memory usage
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Heroarea;
