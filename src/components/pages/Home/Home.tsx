import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home: React.FC = () => {
  // TODO: BRING EVERYTHING OVER FROM THE PURE HTML VERSION
  return (
    <div className="home-container">
      <h1 className='headheadhead'>TEMPORARY Home Page</h1>
      <Link to="/roulette" className="headheadhead">
        LINK TO GO TO ROULETTE
      </Link>
    </div>
  );

};

export default Home;
