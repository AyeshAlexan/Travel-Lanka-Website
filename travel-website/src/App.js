import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";

function App() {
  return(
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;