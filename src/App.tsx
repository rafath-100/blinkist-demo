import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import EntrepreneurPage from './pages/EntrepreneurPage/EntrepreneurPage';
import LibraryPage from './pages/LibraryPage/LibraryPage';

const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/Entrepreneur" element={<EntrepreneurPage/>}/>

        <Route path="/Library" element={<LibraryPage/>}/>

      </Routes>

    </Router>
  );
}

export default App;
