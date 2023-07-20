import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Group 19.png"
import "./Footer.css";
import {  TfiFacebook, TfiLinkedin} from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
    return (
        <div className=" p-10 mb-44 text-white text-xs overflow-hidden" style={{ background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)' }}>
  <footer className="footer grid grid-cols-2 lg:grid-cols-4">
  <div>
    <img src={logo} alt="SheBa Academy" className="w-40" />
    <p className="w-72 text-xs text-white">Stay up-to-date with the latest courses, job tips, and exclusive offers - subscribe to our newsletter today!</p>
  </div> 
  <div>
    <span className="text-white font-bold text-sm">Platform</span> 
    <Link to="" className="link link-hover">Overview</Link> 
    <Link to="" className="link link-hover">Features</Link> 
    <Link to="" className="link link-hover">About</Link>  
    <Link to="" className="link link-hover">Pricing</Link> 
  </div> 
  <div>
    <span className="text-white font-bold text-sm">Help?</span> 
    <Link to="" className="link link-hover">How can I get a course?</Link> 
    <Link to="" className="link link-hover">Where to ask question?</Link> 
    <Link to="" className="link link-hover">How to pay?</Link> 
    <Link to="" className="link link-hover">What is needed?</Link>
  </div> 
  <div>
    <span className="text-white font-bold text-sm">Contacts</span> 
    <Link to="" className="link link-hover">+8801724877440</Link> 
    <Link to="" className="link link-hover">Mirpur DOHS</Link> 
    <Link to="" className="link link-hover">Dhaka</Link>
    <Link to="" className="link link-hover">Bangladesh</Link>
  </div>
  </footer>
 <div className="horizontal"></div>
 <div className="mt-6">
 <div>
 <p className="text-xl">
 © SheBa Academy 2019-2023 All rights reserved
 </p>
 </div>
 <div className="flex justify-end gap-8 text-2xl">
 <BsInstagram></BsInstagram>
 <TfiFacebook></TfiFacebook>
 <TfiLinkedin></TfiLinkedin>
 </div>
</div>
</div>

    );
};

export default Footer;