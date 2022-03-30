import React from 'react';
//import { Route, Routes } from "react-router-dom";
//import Logo from './components/atoms/Logo/Logo';
import LandingPage from './pages/LandingPage/LandingPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Typography } from '@mui/material';

const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

    </Router>
  );
}

export default App;
