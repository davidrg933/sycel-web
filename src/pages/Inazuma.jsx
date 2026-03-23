import React, { useState } from "react";
import TournamentCard from "../components/ui/TournamentCard";
import logo from "../assets/logoSycel.png";
import "./Inazuma.css";
import dani from "../assets/daniInazuma.png";
import daystar from "../assets/daystar.png";
import hospitalet from "../assets/hospitalet.png";
import katawanInazuma from "../assets/katawanInazuma.png";
import dickson from "../assets/dickson.png";
import blasco from "../assets/blasco.png";
import top01 from "../assets/topsInazuma/01top.png";
import top02 from "../assets/topsInazuma/02top.png";
import top03 from "../assets/topsInazuma/03top.jpg";
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
            <PlayerCard name="Katawan" role="Capitán" image={katawanInazuma} />
            <PlayerCard name="Danislup0" role="Player" image={dani} />
            <PlayerCard name="Daystar" role="Player" image={daystar} />
            <PlayerCard name="Hospitalet" role="Player" image={hospitalet} />
            <PlayerCard name="Blasco" role="Player" image={blasco} />
            <PlayerCard name="Dickson" role="Player" image={dickson} />
          </div>
        )}

        {activeTab === "tops" && (
          <div className="tops-layout fade-in">
            <TournamentCard
              tag="Hospitalet"
              title="SPANISH LEAGUE FINAL PHASE"
              description="Resultados oficiales de la fase final de la spanish league."
              image={top01}
            />
            <TournamentCard
              tag="El dickson"
              title="Realengo Legends"
              description="Resultados oficiales del Realengo Legends."
              image={top02}
            />
            <TournamentCard
              tag="El dickson"
              title="Sanctum VR Tournament #2"
              description="Resultados oficiales de Sanctum VR Tournament #2."
              image={top03}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Inazuma;
