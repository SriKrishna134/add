import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");// to set the activation //
    const {getTotalcartAmount, token, setToken} = useContext(StoreContext);
    const navigate = useNavigate();
    const logout = ()=>{
      localStorage.removeItem("token");
      setToken("")
      navigate("/")
    }
    const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className='navbar'>
        <Link to='/' onClick={() => scrollToSection("home")}><img src="l.png" className="logo"></img></Link>
        <ul className="navbar-menu">
             <Link to='/' onClick={() => scrollToSection("home")}className={menu === "home" ? "actve" : ""}>Home</Link>

             <a onClick={() => scrollToSection("info")}
              style={{ cursor: 'pointer' }}
              >About Us</a>

              <a onClick={() => scrollToSection("howitworks")}
              style={{ cursor: 'pointer' }}
              >How It Works</a>

              <a onClick={() => scrollToSection("startups")}
              style={{ cursor: 'pointer' }}
              >Startups & SMEs</a>
              <a onClick={() => scrollToSection("hni")}
              style={{ cursor: 'pointer' }}
              >HNI's</a>

              <a onClick={() => scrollToSection("resources")}
              style={{ cursor: 'pointer' }}
              >Resources</a> 


             {/* <a  onClick={() => navigate("/infu")} className={`nav-link ${location.pathname === "/infu" ? "active" : ""}`}>
                Influencer
            </a>
            <a  onClick={() => navigate("/brand")}className={`nav-link ${location.pathname === "/brand" ? "active" : ""}`}>
                Brand
            </a>
             
             <a href='#footer' onClick={()=>setMenu("contact")}className={menu === "contact" ? "actve" : ""}>Contact </a> */}
        </ul>
        <div className="navbar-right">
             <img src={assets.search_icon} alt="" />
             <div className="navbar-search-icon">
                
                <div className={getTotalcartAmount()===0?"":"dot"}></div>
                </div>
                {!token?<button onClick={()=> setShowLogin(true) }>Sign in</button>
                :<div className='navbar-profile'>
                  <img src={assets.profile_icon} alt="" />
                  <ul className="nav-profile-dropdown">
                    
                    <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                  </ul>
                  </div>}
                
        </div>    
    </div>
  )
}

export default Navbar
