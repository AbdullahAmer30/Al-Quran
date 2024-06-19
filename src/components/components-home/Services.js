import React from 'react';
import homedata from '../../data/homedata.json';
import './services.css';
import imgg from './islamicstudies.png'; // Make sure to import the image if it's used

const Howitworks = () => {
    const publicUrl = process.env.PUBLIC_URL;

    return (
        <section id="services" className="p-100px-tb sm-p-50px-b whole-bg">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <div className="section-title text-center m-50px-b">
                            <h2>{homedata.howitworks.sectiontitle}</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    {homedata.services.map((service, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="service-box bg-color text-center p-60px lg-p-40px md-p-30px sm-p-20px m-10px-t m-10px-b">
                                <img src={publicUrl + service.icon} alt="hello" />
                                <h4>{service.title}</h4>
                                <p>{service.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Howitworks;
