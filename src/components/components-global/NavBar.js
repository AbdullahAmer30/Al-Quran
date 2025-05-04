// import React, { useEffect } from 'react';
// import './navbar.css';
// import StickyMenu from './StickyMenu';
// import Navigation from './Navigation';
// import { FaBars } from 'react-icons/fa';

// function NavbarPage({ action }) {
//   useEffect(() => {
//     StickyMenu();
//   }, []);

//   return (
//     <>
//       {/* Phone number section */}
//       <div className="phone-number">
//         <div className="container">
//           <p>Call Us: +1-234-567-890</p>
//         </div>
//       </div>

//       <header className="DR-header-area DR-header-8-area DR-sticky navbar navbar-inverse navbar-expand-lg header-nav fixed-top light-header">
//         <div className="container">
//           <div className="header-nav-box header-nav-box-6">
//             <div className="row align-items-center">
//               <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
//                 <div className="DR-logo-box">
//                   {/* <a href="/">
//                     <img className='img-logo' src={logo} alt="" />
//                   </a> */}
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
//                 <div className="DR-header-main-menu navigation">
//                   <Navigation />
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-7 col-sm-6 col-6 order-2 order-sm-3">
//                 <div className="DR-btn-box text-right">
//                   <div
//                     onClick={(e) => action(e)}
//                     className="toggle-btn ml-30 canvas_open d-lg-none d-block"
//                   >
//                     <FaBars />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

// export default NavbarPage;
