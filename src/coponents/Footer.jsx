import React from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import  Twitter from '@mui/icons-material';
import { SocialIcon } from 'react-social-icons';
import Marquee from "react-fast-marquee";


const Footer = () => {
  return (
    <footer className="footer" >
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p>PUBLISHING BODY</p>
            <p>MMMUT, Gorakhpur</p>
            <p>Email: edb2022@gmail.com</p>
          </div>
          <div className="footer-left">
             <p> Vagmita</p>
             <p>Arunodaya</p>
             <p>ADC</p>
          </div>
          <div className="footer-right">
          <div className="footer-left">
             <p> Malvika</p>
             <p>Tiresia</p>
             <p>Newsletter</p>
          </div>
           
          </div>
        </div>
       
    
        <div className="footer-bottom" style={{alignItems:"center"}}>
        <div className="social-links" style={{display:"flex",flexDirection:"row"}}>
            <div style={{padding:"20px"}} > <SocialIcon  url="www.facebook.com" href='https://instagram.com'/></div>
              
             <div style={{padding:"20px"}} > <SocialIcon url="www.instagram.com" href='https://instagram.com'/>
              </div>
             <div style={{padding:"20px"}} > <SocialIcon url="www.twiter.com" href='https://instagram.com'/>
              </div>
              
            </div>
        </div>
        <Marquee><div><h3>Upcoming Event:</h3><p>Vahgmita</p></div></Marquee>
      </div>
    </footer>
  );
};

export default Footer;
