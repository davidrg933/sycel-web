import React, { useState } from "react";
import logo from "../assets/logoSycel.png";
import "./Pokemon.css";

const Pokemon = () => {
  const [activeTab, setActiveTab] = useState("none");

  return (
    <div className="game-page">
      <header className="hero-section">
        <div className="hero-image">
          <img src={logo} alt="Sycel Logo" className="hero-logo" />
        </div>
        <div className="hero-title-container">
          <h1
            className={`tab-title ${activeTab === "roster" ? "active" : ""}`}
            onClick={() => setActiveTab("roster")}
          >
            ROSTER
          </h1>
          <h1
            className={`tab-title ${activeTab === "tops" ? "active" : ""}`}
            onClick={() => setActiveTab(activeTab === "tops" ? "none" : "tops")}
          >
            TOPS
          </h1>
        </div>
      </header>

      <main className="content-container">
        {activeTab === "roster" && (
          <section className="fade-in">
            <h2>NUESTRO EQUIPO</h2>
            <div className="roster-grid">
              <div className="player-card">PabloPazos500</div>
              <div className="player-card">Quiquevita</div>
              <div className="player-card">Jonubieta</div>
              <div className="player-card">Grimmblack76</div>
              <div className="player-card">Mofleti</div>
            </div>
          </section>
        )}

        {activeTab === "tops" && (
          <section className="fade-in">
            <h2>TOPS SYCEL</h2>
            <div className="tops-list">
              <div className="top-item"></div>
              <div className="top-item"></div>
              <div className="top-item"></div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Pokemon;
