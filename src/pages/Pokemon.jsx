import React, { useState } from "react";
import logo from "../assets/logoSycel.png";
import "./Pokemon.css";
import quiquePokemon from "../assets/quiquePokemon.png";
import kataPokemon from "../assets/katawanPokemon.png";
import jonubieta from "../assets/jonubieta.png";
import grim from "../assets/grim.png";
import mofleti from "../assets/mofleti.png";
import pazos from "../assets/pabloPazos.png";
import PlayerCard from "../components/ui/PlayerCard";

const Pokemon = () => {
  const [activeTab, setActiveTab] = useState("roster");

  return (
    <div className="pokemon-page">
      <header className="pokemon-header">
        <img src={logo} alt="Sycel Logo" className="pokemon-main-logo" />

        <div className="pokemon-nav-tabs">
          <h1
            className={`pokemon-tab ${activeTab === "roster" ? "is-active" : ""}`}
            onClick={() => setActiveTab("roster")}
          >
            ROSTER
          </h1>
          <h1
            className={`pokemon-tab ${activeTab === "tops" ? "is-active" : ""}`}
            onClick={() => setActiveTab("tops")}
          >
            TOPS
          </h1>
        </div>
      </header>

      <main className="pokemon-body">
        {activeTab === "roster" && (
          <div className="roster-layout fade-in">
            <PlayerCard name="PabloPazos" role="Capitán" image={pazos} />
            <PlayerCard name="Katawan" role="Player" image={kataPokemon} />
            <PlayerCard name="Jon Ubieta" role="Player" image={jonubieta} />
            <PlayerCard name="Grim" role="Player" image={grim} />
            <PlayerCard name="Quique" role="Player" image={quiquePokemon} />
            <PlayerCard name="Mofleti" role="Player" image={mofleti} />
          </div>
        )}

        {activeTab === "tops" && <div className="tops-layout fade-in"></div>}
      </main>
    </div>
  );
};

export default Pokemon;
