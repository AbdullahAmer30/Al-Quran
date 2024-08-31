import React, { Component } from 'react';
import homedata from '../../data/footerdata.json';
import './Footer.css'
class Footer extends Component {
  render() {
    let data = this.props.data;
    let logoAttr = 'logo';
    let publicUrl = process.env.PUBLIC_URL;
    let logoLink = publicUrl;

    const courses = [
      {
        title: 'Learn Noraani Qaida Online',
        link: '/',
      },
      {
        title: 'Reading Quran Online',
        link: '/',
      },
      {
        title: 'Learn Quran Online With Tajweed',
        link: '/',
      },
      {
        title: 'Hifz-e-Quran | Quran Memorization Online',
        link: '/',
      },
      {
        title: 'Learn Quran Tafseer Online',
        link: '/',
      },
      {
        title: 'Basic Islamic Education & Daily Supplications',
        link: '/',
      },
    ];

    const quickLinks = [
      {
        title: 'Home',
        link: '/',
      },
      {
        title: 'About Us',
        link: '/',
      },
      {
        title: 'Pricing',
        link: '/',
      },
      {
        title: 'Contact Us',
        link: '/',
      },
      {
        title: 'Terms and Conditions',
        link: '/',
      },
      {
        title: 'Privacy Policy',
        link: '/',
      },
    ];

    const paymentMethods = [
      {
        name: 'Visa',
        icon: '/path-to-icons/visa.png',
      },
      {
        name: 'MasterCard',
        icon: '/path-to-icons/mastercard.png',
      },
      {
        name: 'PayPal',
        icon: '/path-to-icons/paypal.png',
      },
      // Add more payment methods as needed
    ];

    return (
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Courses</h5>
              <ul>
                {courses.map((course, index) => (
                  <li key={index}>
                    <a href={course.link}>{course.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-4 text-right">
              <div className="footer-topp">
                <a className="footer-logo" href={logoLink}>
                  <img src={publicUrl + `/assets/img/logonew.png`}  alt={logoAttr} />
                </a>
                <p>{data.footertext}</p>
                <div className="social-network">
                  {data.socialicon.map((icon, i) => (
                    <a key={i} href={icon.url}>
                      <img className='imgg' src={publicUrl + icon.icon} alt={`icon-${i}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className=" col-md-6 text-center text-md-center">
                <p dangerouslySetInnerHTML={{ __html: data.copyrighttext }}></p>
              </div>
              <div className="col-md-6 text-center text-md-center">
                <div className="payment-methods">
                  {data.payment.map((method, index) => (
                    <img  key={index} src={publicUrl + method.icon} alt={method.name} className="payment-icon" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
