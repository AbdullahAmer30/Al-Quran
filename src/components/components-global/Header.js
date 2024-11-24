import React from 'react';
import { HashLink as HLink } from 'react-router-hash-link';
import './Navbar.css';

const Header = () => {
    const imgattr = 'image';

    return (
        <div>
            {/* Phone number section
            <div className="phone-number">
                <div className="container">
                    <h1>Call Us: +1-234-567-890</h1>
                </div>
            </div> */}

            {/* Navbar section */}
            <header id="home">
                <nav className="navbar navbar-inverse navbar-expand-lg header-nav fixed-top light-header nav-bgcolor">
                    <div className="container-fluid imggg">
                        <a className="navbar-brand">
                            <img src={process.env.PUBLIC_URL + '/assets/img/alnor new2.png'} className='image' alt={imgattr} />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCodeply">
                            <i className="icofont-navigation-menu"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCodeply">
                            <ul className="nav navbar-nav ml-auto">
                                <li className='link-color'>
                                    <HLink className="nav-link" smooth to={`/#home`}>Home</HLink>
                                </li>
                                <li className='link-color'>
                                    <HLink className="nav-link" smooth to={`/#feature1`}>About</HLink>
                                </li>
                                <li className='link-color'>
                                    <HLink className="nav-link" smooth to={`/#services`}>Services</HLink>
                                </li>
                                <li className='link-color'>
                                    <HLink className="nav-link" smooth to={`/#pricing`}>Price</HLink>
                                </li>
                                <li className='link-color'>
                                    <HLink className="nav-link" smooth to={`/#testimonials`}>Testimonial</HLink>
                                </li>
                                <li className='link-color'>
                                    <HLink className="nav-link" smooth to={`/#contact`}>Contact</HLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
