// import React, { Component } from "react";
// import {
//   Navbar,
//   Nav,
//   NavbarToggler,
//   NavItem,
//   NavLink,
//   Container,
//   Collapse
// } from "reactstrap";
// import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import './navbar.css'
import StickyMenu from './StickyMenu';
import Navigation from './Navigation';

// Import Logo
// import logodark from "../../assets/images/logo-dark.png";
// import logolight from "../../assets/images/logo-light.png";
import { FaBars } from 'react-icons/fa';
//import icon
// import FeatherIcon from "feather-icons-react";

// import ScrollspyNav from "./Scrollspy";
function NavbarPage({ action }) {
  useEffect(() => {
    StickyMenu();
  }, []);

// class NavbarPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpenMenu: false,
//     };
//   }
  // render() {
  //   let targetId = this.props.navItems.map((item) => {
  //     return item.idnm;
  //   });
    return (
      // <React.Fragment>
      //   <Container>
      //     <Navbar
      //       expand="lg"
      //       fixed={this.props.top === true ? "top" : ""}
      //       className={this.props.navClass + " fixed-top navbar-custom sticky sticky-dark align-items-center"}
      //       id="navbar"
      //       container
      //     >
      //       <Link className="logo me-3" to="/">
      //         {this.props.imglight === true ? (
      //           <img src={logolight} alt="" height="26" />
      //         ) : (
      //           <img src={logodark} alt="" height="26" />
      //         )}
      //       </Link>
      //       <NavbarToggler onClick={this.toggle}>
      //         <span className="ti-menu"></span>
      //       </NavbarToggler>
      //       <Collapse
      //         id="navbarCollapse"
      //         isOpen={this.state.isOpenMenu}
      //         className=" navbar-collapse"
      //       >
      //         <ScrollspyNav
      //           scrollTargetIds={targetId}
      //           scrollDuration="800"
      //           headerBackground="true"
      //           activeNavClass="active"
      //           className="navbar-collapse"
      //         >
      //           <Nav className="navbar-nav navbar-center" id="navbar-navlist">
      //             {this.props.navItems.map((item, key) => (
      //               <NavItem
      //                 key={key}
      //                 className={item.navheading === "Home" ? "active" : ""}
      //               >
      //                 <NavLink
      //                   className={item.navheading === "Home" ? "active" : ""}
      //                   href={"#" + item.idnm}
      //                 >
      //                   {item.navheading}
      //                 </NavLink>
      //               </NavItem>
      //             ))}
      //           </Nav>
      //           <ul className="list-inline ml-auto menu-social-icon mb-0 py-2 py-lg-0">
      //             <li className="list-inline-item ml-0">
      //               <Link to="#" className="menu-social-link"><FeatherIcon icon="facebook" className="icon-xs sw_1-5" /></Link>
      //             </li>{" "}
      //             <li className="list-inline-item">
      //               <Link to="#" className="menu-social-link"><FeatherIcon icon="twitter" className="icon-xs sw_1-5" /></Link>
      //             </li>{" "}
      //             <li className="list-inline-item">
      //               <Link to="#" className="menu-social-link"><FeatherIcon icon="instagram" className="icon-xs sw_1-5" /></Link>
      //             </li>{" "}
      //             <li className="list-inline-item mr-0">
      //               <Link to="#" className="menu-social-link"><FeatherIcon icon="linkedin" className="icon-xs sw_1-5" /></Link>
      //             </li>
      //           </ul>
      //         </ScrollspyNav>
      //       </Collapse>
      //     </Navbar>
      //   </Container>
      // </React.Fragment>
      <>
      <header className="DR-header-area DR-header-8-area DR-sticky navbar navbar-inverse navbar-expand-lg header-nav fixed-top light-header">
        <div className="container">
          <div className="header-nav-box header-nav-box-6">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                <div className="DR-logo-box">
                  {/* <a href="/">
                    <img className='img-logo' src={logo} alt="" />
                  </a> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                <div className="DR-header-main-menu navigation" >
                  <Navigation />
                </div>
              </div>
              <div className="col-lg-4 col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                <div className="DR-btn-box text-right">
                  <div
                    onClick={(e) => action(e)}
                    className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                  >
                    <FaBars/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
    );
  }
// }
// }
export default NavbarPage;