import React from 'react';
import '../styles/HeroSection.css';
import beach from '../assets/beach.jpg';
import nature from '../assets/nature.jpeg';
import hotel from '../assets/Hotel.JPG';
import mountain from '../assets/mountain.jpg';
import { useNavigate } from 'react-router-dom';
import About from '../pages/About';

const categories = [
  { img: beach, title: 'BEACH' },
  { img: nature, title: 'NATURE' },
  { img: hotel, title: 'HOTEL' },
  { img: mountain, title: 'MOUNTAIN' }
];

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="left-content">
          <h1>
            EXPLORING THE<br />
            BEAUTY OF<br />
            SRI LANKA.
          </h1>
          <button className="hero-btn" onClick={() => navigate('/about')  }>LEARN MORE </button>
        </div>

        <div className="scroll-wrapper">
          <div className="scroll-cards">
            {categories.map((item, index) => (
              <div className="scroll-card" key={index}>
                <img src={item.img} alt={item.title} />
                <div className="overlay-text">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
