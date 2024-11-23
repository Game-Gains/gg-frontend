import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home: React.FC = () => {
  // TODO: BRING EVERYTHING OVER FROM THE PURE HTML VERSION
  return (
    <div className="home-container">
      <div className="ticker-wrap">
        {/* TODO: MAKE THIS LIVE  */}
            <div className="ticker">
                <div className="ticker-item">🔥 TRENDING MEMECOINS:</div>
                <div className="ticker-item">PEPE +15.2% ($0.000003912)</div>
                <div className="ticker-item">WOJAK +8.7% ($0.00000891)</div>
                <div className="ticker-item">BONK +22.4% ($0.00001234)</div>
                <div className="ticker-item">DOGE +5.6% ($0.12832)</div>
                <div className="ticker-item">SHIB +10.3% ($0.00002891)</div>
                {/* <!-- Duplicate items for seamless loop --> */}
                <div className="ticker-item">🔥 TRENDING MEMECOINS:</div>
                <div className="ticker-item">PEPE +15.2% ($0.000003912)</div>
                <div className="ticker-item">WOJAK +8.7% ($0.00000891)</div>
                <div className="ticker-item">BONK +22.4% ($0.00001234)</div>
                <div className="ticker-item">DOGE +5.6% ($0.12832)</div>
                <div className="ticker-item">SHIB +10.3% ($0.00002891)</div>
            </div>
        </div>
      <h1 className='headheadhead'>TEMPORARY Home Page</h1>
      <Link to="/roulette" className="headheadhead">
        LINK TO GO TO ROULETTE
      </Link>
    </div>
  );

};

export default Home;
