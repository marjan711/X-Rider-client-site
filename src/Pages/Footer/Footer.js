import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Footer.css'

const phoneLogo = <FontAwesomeIcon icon={faPhone} />
const emailLogo = <FontAwesomeIcon icon={faMailBulk} />

const Footer = () => {
    return (
        <div>
             <div  className="container-fluid mt-5" >
           
           <div className="row upper-part  pt-2 pb-2">
                   {/* image and social icons */}
                   <div className="col-md-4 ">
                       <img className="w-25" src="https://i.ibb.co/NnZFmvz/Logo-Makr-6-Rbr-Go.png" alt="" />
                       <h6 className="fw-bolder mt-2 text-white">X-RIDERS</h6>

                   </div>
                   
                   {/* Quick Links */}
                   <div className="col-md-4 ">
                           <h4 className="fw-bold  mb-3 text-white ">Quick Links</h4>
                           <div className="row">

                               <div className="col-md-6">
                                       <Link to="/services"><h6>Services</h6></Link> 
                                       <Link to="/services"><h6>Booking Tickets</h6></Link> 
                                       <Link to="/services"><h6>Tour Agents</h6></Link> 
                               </div>

                               <div className="col-md-6">
                                       <Link to="/about"><h6>About Us</h6></Link>
                                       <Link to="/about"><h6>Contact Us</h6></Link>
                                       <Link to="/about"><h6>Terms & Condition</h6></Link>
                               </div>
                           </div>
                       
                   </div>
                       {/* Adress & details */}
                   <div className="col-md-4 ">
                           <h5 className="fw-bolder text-white mt-md-3 mb-2">1810
                               KING STREET,
                               BD
                           </h5>
                           <h6 className="fw-bolder text-white">{phoneLogo} 0100301052</h6>
                           <h6 className="fw-bolder text-white">{emailLogo} demo@gmail.com</h6>
                   </div>
           </div>

           <div className="row lower-part">
               <div className="col pt-5 pb-5">
                   <p className="text-bold text-white" >Copyright ©2021 . All Rights Reserved.</p>
               </div>
           </div>
       </div>
        </div>
    );
};

export default Footer;