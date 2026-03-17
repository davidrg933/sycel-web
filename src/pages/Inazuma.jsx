import React, { useState } from "react";
import logo from "../assets/logoSycel.png";
import "./Inazuma.css";

const Inazuma = () => {
  // Estado para saber qué pestaña está activa
  // puede ser: 'none', 'roster' o 'tops'
  const [activeTab, setActiveTab] = useState("none");

  return (
    <div className="game-page">
      {/* SECCIÓN HERO (Igual que la Home) */}
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

      {/* CONTENIDO DINÁMICO */}
      <main className="content-container">
        {activeTab === "roster" && (
          <section className="fade-in">
            <h2>NUESTRO EQUIPO</h2>
            <div className="roster-grid">
              <div className="player-card">Katawan</div>
              <div className="player-card">Hospitalet</div>
              <div className="player-card">Blasco</div>
              <div className="player-card">Dickson</div>
              <div className="player-card">Danislupo</div>
              <div className="player-card">Danislupo</div>
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

export default Inazuma;
