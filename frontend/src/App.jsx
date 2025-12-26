import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';
import Info from './pages/InfoPage/InfoPage';
import Profile from './pages/Profile/Profile';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import SurveyPage from './pages/SurveyPage/SurveyPage';
import UserTypePage from './pages/UserTypePage/UserTypePage';
import BrandPage from './pages/BrandPage/BrandPage';
import Booking_Success from './pages/Booking_Success/Booking_Success';
import LogoIntro from './components/LogoIntro/LogoIntro';
import CursorDragon from './components/CursorDragon/CursorDragon';
import './App.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showIntro, setShowIntro] = useState(() => {
    // Only show intro if not seen in this session
    return !sessionStorage.getItem('introShown');
  });
  const [introComplete, setIntroComplete] = useState(() => {
    return sessionStorage.getItem('introShown') === 'true';
  });
  
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle intro completion
  const handleIntroComplete = () => {
    console.log('✅ Intro complete!');
    sessionStorage.setItem('introShown', 'true');
    setShowIntro(false);
    setTimeout(() => {
      setIntroComplete(true);
    }, 500);
  };

  // Skip intro for development (remove in production)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('skipIntro') === 'true') {
      handleIntroComplete();
    }
  }, []);

  return (
    <>
      {/* Logo Intro Animation */}
      {showIntro && <LogoIntro onComplete={handleIntroComplete} />}

      {/* Login Popup */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      {/* Cursor Following Dragon */}
      {introComplete && <CursorDragon />}

      {/* Main App Content */}
      <div 
        className={`app ${introComplete ? 'mounted' : ''}`}
        style={{
          opacity: showIntro ? 0 : 1,
          transition: 'opacity 1s ease',
          pointerEvents: showIntro ? 'none' : 'auto'
        }}
      >
        <Navbar setShowLogin={setShowLogin} />
        
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/survey" element={<SurveyPage />} />
          <Route path="/usertype" element={<UserTypePage />} />
          <Route path="/infu" element={<Home />} />
          <Route path="/brand" element={<BrandPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/info" element={<Info />} />
          <Route path="/person/:id" element={<Profile />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/success" element={<Booking_Success />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;