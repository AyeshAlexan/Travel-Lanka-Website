import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>

        {/* 🚀 Default page: LOGIN */}
        <Route path="/" element={<LoginPage />} />

        {/* 🌐 Pages with Navbar */}
        <Route
          path="/home"
          element={
            <>
              <NavBar />
              <HomePage />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <NavBar />
              <About />
            </>
          }
        />

        <Route
          path="/explore"
          element={
            <>
              <NavBar />
              <Explore />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <NavBar />
              <Contact />
            </>
          }
        />

        {/* If user directly visits /login */}
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </Router>
  );
}

export default App;
