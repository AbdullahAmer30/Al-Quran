// import React, { useState } from 'react';
// import {NavLink } from 'react-router-dom';
// // import logo from '../assets/images/MED CARE-03M.png';

// function Drawer({ drawer, action,lang}) {
//     const [itemSize, setSize] = useState('0px');
//     const [item, setItem] = useState('home');
//     const handler = (e, value) => {
//         // e.preventDefault();
//         const getItems = document.querySelectorAll(`#${value} li`).length;
//         if (getItems > 0) {
//             setSize(`${43 * getItems}px`);
//             setItem(value);
//         }
//     };
//     return (
//         <>
//                     <div
//                         onClick={(e) => action(e)}
//                         className={`off_canvars_overlay ${drawer ? 'active' : ''}`}
//                     ></div>
//                     <div className="offcanvas_menu">
//                         <div className="container-fluid">
//                             <div className="row">
//                                 <div className="col-12">
//                                     <div
//                                         className={`offcanvas_menu_wrapper ${
//                                             drawer ? 'active' : ''
//                                         }`}
//                                     >
//                                         <div className="canvas_close">
//                                             <a href="#" onClick={(e) => action(e)}>
//                                                 <i className="fa fa-times"></i>
//                                             </a>
//                                         </div>
//                                         <div className="offcanvas-brand text-center mb-40">
//                                             {/* <img src={logo} alt="" /> */}
//                                         </div>
//                                         <div id="menu" className="text-left ">
//                                             <ul className="offcanvas_main_menu">
//                                                 <li>
                                                   
//                                                     <NavLink to="/">Home </NavLink>
                                                    
//                                                 </li>
//                                                 <li>
//                                                       <NavLink to="/about">About</NavLink>
//                                                 </li>
//                                                 <li>
                                                   
//                                                     <NavLink to="/patientRecord">Patient Record</NavLink>
                                                    
//                                                 </li>
//                                                 <li>
                                                   
//                                                 <NavLink to="/doctor-appointment">Appointment</NavLink> 
                                                    
//                                                 </li>
//                                             </ul>
//                                         </div>
                                       
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
                
            
//         </>
//     );
// }

// export default Drawer;
