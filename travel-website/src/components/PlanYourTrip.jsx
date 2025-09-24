import React from "react";
import "../styles/PlanYourTrip.css";
import adventure from "../assets/adventure.jpg";
import beach from "../assets/slbeach.jpg";
import culture from "../assets/culture.jpg";
import wildLife from "../assets/widlife.jpg";

const PlanYourTrip = () => {
    const categories = [
        {
            title: "Adventure",
            img : adventure,
            desc: "Experience thrilling hikes, white-water rafting, and breathtaking mountain views."
        },
        {
            title: "Beach",
            img : beach,
            desc: "Relax on sandy shores, swim in crystal-clear waters, and enjoy the sun."
        },
        {
            title: "Culture",
            img : culture,
            desc: "Discover ancient temples, colonial architecture, and rich Sri Lankan traditions."
        },
        {
            title: "Wildlife",
            img : wildLife,
            desc: "Spot elephants, leopards, and rare birds in Sri Lanka’s lush national parks." 

        }
    ];

    return(
        <section className="plan-your-trip">
            <h2>Plan Your Trip</h2>
            <p className="trip-subtitle">Explore Sri Lanka your way -pick a theme your journey.</p>

            <div className="trip-grid">
        {categories.map((ima, index) => (
          <div className="trip-card" key={index}>
            <img src={ima.img} alt={ima.title} />
            <div className="trip-overlay">
              <h3>{ima.title}</h3>
            </div>
            <p className="trip-desc">{ima.desc}</p>
          </div>
        ))}
      </div>
            </section>

    );
};

export default PlanYourTrip;