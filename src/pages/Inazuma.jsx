import React, { useState } from "react";
import logo from "../assets/logoSycel.png";
import "./Inazuma.css";
import dani from "../assets/dani.jpeg";
import top01 from "../assets/01-top-hospi.png";

const Inazuma = () => {
  const [activeTab, setActiveTab] = useState("roster");

  const players = [
    {
      id: 1,
      name: "KATAWAN",
      role: "CAPITÁN",
      img: dani,
    },
    {
      id: 2,
      name: "HOSPITALET",
      role: "PLAYER",
      img: dani,
    },
    {
      id: 3,
      name: "BLASC0",
      role: "PLAYER",
      img: dani,
    },
    {
      id: 4,
      name: "DICKSON",
      role: "PLAYER",
      img: dani,
    },
    {
      id: 5,
      name: "DAYSTAR",
      role: "PLAYER",
      img: dani,
    },
    {
      id: 6,
      name: "DANISLUP0",
      role: "PLAYER",
      img: dani,
    },
  ];

  return (
    <div className="inazuma-page">
      <header className="inazuma-header">
        <img src={logo} alt="Sycel Logo" className="inazuma-main-logo" />

        <div className="inazuma-nav-tabs">
          <h1
            className={`inazuma-tab ${activeTab === "roster" ? "is-active" : ""}`}
            onClick={() => setActiveTab("roster")}
          >
            ROSTER
          </h1>
          <h1
            className={`inazuma-tab ${activeTab === "tops" ? "is-active" : ""}`}
            onClick={() => setActiveTab("tops")}
          >
            TOPS
          </h1>
        </div>
      </header>

      <main className="inazuma-body">
        {activeTab === "roster" && (
          <div className="roster-layout fade-in">
            {players.map((player) => (
              <div key={player.id} className="player-card-clean">
                <div className="player-image-box">
                  <img src={player.img} alt={player.name} />
                  <span className="player-role-badge">{player.role}</span>
                </div>
                <div className="player-name-box">
                  <h3>{player.name}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "tops" && (
          <div className="tops-layout fade-in">
            <div className="tournament-card">
              <div className="tournament-info">
                <span className="tournament-tag">FINAL PHASE</span>
                <h3>SPANISH LEAGUE</h3>
                <p>
                  Resultados oficiales de la fase final de la spanish league.
                </p>
              </div>

              <div className="tournament-image-container">
                <img
                  src={top01}
                  alt="Spanish League Final Phase"
                  className="tournament-img"
                />
              </div>
            </div>
            <div className="tournament-card">
              <div className="tournament-info">
                <span className="tournament-tag">FINAL PHASE</span>
                <h3>SPANISH LEAGUE</h3>
                <p>
                  Resultados oficiales de la fase final de la spanish league.
                </p>
              </div>

              <div className="tournament-image-container">
                <img
                  src={top01}
                  alt="Spanish League Final Phase"
                  className="tournament-img"
                />
              </div>
            </div>
            <div className="tournament-card">
              <div className="tournament-info">
                <span className="tournament-tag">FINAL PHASE</span>
                <h3>SPANISH LEAGUE</h3>
                <p>
                  Resultados oficiales de la fase final de la spanish league.
                </p>
              </div>

              <div className="tournament-image-container">
                <img
                  src={top01}
                  alt="Spanish League Final Phase"
                  className="tournament-img"
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Inazuma;
