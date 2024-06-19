import React,{useEffect} from 'react';
import { NavLink,useLocation } from 'react-router-dom';

function Navigation() {
   
    
    return (
        <>
             
                <ul>
                    <li>
                        <NavLink to="/">Home </NavLink> 
                    </li>
                    <li>
                        <NavLink to="/patientRecord">Patient Record</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about">About</NavLink>  
                   
                    </li> 
                    {/* <li>
                    <NavLink to="/patient">Patient</NavLink>  
                   
                    </li>  */}
                    <li>
                    <NavLink to="/doctor-appointment">Appointment</NavLink>  
                   
                    </li>
                    
                </ul>
            
        </>
    );
}

export default Navigation;
