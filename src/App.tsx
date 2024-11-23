import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Roulette from './components/pages/Roulette/Roulette';


const App: React.FC = () => {
  // track sidebar state
  const [sideMenuActive, setSideMenuActive] = useState<boolean>(false);

  return (
    <Router>
      {/* Keep navbar for all pages, resize rest of page space based on sidebar */}
      <NavBar setSideMenuActive={setSideMenuActive} sideMenuActive={sideMenuActive}/>
      <div className={`all-pages${!sideMenuActive ? '-sidebar-closed' : ''}`}>
        <Routes>
          {/* Home Page TODO */}
          <Route path="/" element={
            <Home />
          } />
          {/* Roulette TODO*/}
          <Route path="/roulette" element={<Roulette />} />
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;
