import React, { useState } from "react";
import logo from "../assets/logoSycel.png";
import "./Inazuma.css";
import dani from "../assets/dani.jpeg";
import daystar from "../assets/daystar.png";
import kataInazuma from "../assets/katawanInazuma.jpg";
import top01 from "../assets/01-top-hospi.png";
import PlayerCard from "../components/ui/PlayerCard";

const Inazuma = () => {
  const [activeTab, setActiveTab] = useState("roster");

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
            <PlayerCard name="Katawan" role="Capitán" image={kataInazuma} />
            <PlayerCard name="Dani" role="Player" image={dani} />
            <PlayerCard name="Daystar" role="Player" image={daystar} />
            <PlayerCard name="Hospitalet" role="Player" image={kataInazuma} />
            <PlayerCard name="Blasco" role="Player" image={kataInazuma} />
            <PlayerCard name="Dickson" role="Player" image={kataInazuma} />
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
          </div>
        )}
      </main>
    </div>
  );
};

export default Inazuma;
