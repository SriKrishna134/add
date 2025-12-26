import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-left">
            <img className='loog' src="/logy.png" alt="" />
            <p>CredGrow connects profitable Indian SMEs and Startups with High Net-Worth Individuals (HNIs) and Family Offices through structured investment instruments like CCPS and CCD.
            </p>
            <div className="footer-social-icon">
              <a href="https://www.facebook.com/profile.php?id=100011141617447" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
               </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={assets.twitter_icon} alt="Twitter" />
                   </a>
                   <a href="https://www.linkedin.com/in/srikrishna-hireholi/" target="_blank" rel="noopener noreferrer">
                     <img src={assets.linkedin_icon} alt="LinkedIn" />
                       </a>
            </div>
        </div>
        <div className="footer-centre">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>How It Works</li>
                <li>Startups & SME's</li>
                <li>HNI's</li>
                <li>Resources</li> 
                <li>Privacy policy</li>
            </ul>
        </div>        
        <div className="footer-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 7348949007</li>                               
              <a href="https://gmail.com" target="_blank" rel="noopener noreferrer" > <li>info@credgrowcapital.com</li> </a>
            </ul>
        </div>

      </div>
      <hr />
      <p className='footer-copyright'>
      Copyright 2025. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
