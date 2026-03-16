import React from "react";
import logo from "../assets/logoSycel.png";
import CreatorCard from "../components/ui/CreatorCard";
import rinna from "../assets/rinna.jpeg";
import vgc from "../assets/pokemonVGC.png";
import inazuma from "../assets/inazuma.png";

const Home = () => {
  return (
    <main>
      {/* SECCIÓN HERO */}
      <section className="hero">
        <div className="hero-glow"></div>

        <img src={logo} className="hero-logo-large" alt="Sycel Club" />

        <h1 className="hero-title">
          SYCEL <span>SYCEL</span>
        </h1>

        <p className="hero-subtitle">Inazuma Eleven • Pokémon</p>
      </section>

      {/* SECCIÓN CREADORES */}
      <section id="creadores" className="creators-section">
        <div className="section-header">
          <h2 style={{ fontSize: "1.8rem", fontWeight: 900 }}>
            <span style={{ color: "var(--sycel-gold)" }}>SYCEL</span> CREATORS
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="creators-grid">
          <CreatorCard
            name="Quiquevita"
            role="Fundador & Creador"
            image="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070"
            link="https://www.twitch.tv/quiquevita"
          />
          <CreatorCard
            name="Rinna0w"
            role="Creadora de Contenido"
            image={rinna}
            link="https://www.twitch.tv/rinna0w"
          />
        </div>
      </section>
      {/* SECCIÓN INAZUMA ELEVEN */}
      <section id="juegos" className="game-section inazuma-bg">
        <div className="game-content">
          <div className="game-info">
            <span className="game-tag">Victory Road</span>
            <h2 className="game-title">
              INAZUMA <span className="gold">ELEVEN</span>
            </h2>
            <p className="game-description">
              Reviviendo la esencia del Victory Road. Formamos a los mejores
              estrategas para dominar el campo de juego.
            </p>
            <button className="btn-secondary">VER MÁS</button>
          </div>
          <div className="game-image">
            <img src={inazuma} alt="Inazuma Eleven" className="inazuma-image" />
            <div className="ball-glow"></div>
          </div>
        </div>
      </section>

      {/* SECCIÓN POKÉMON */}
      <section className="game-section pokemon-bg">
        <div className="game-content reverse">
          <div className="game-info">
            <span className="game-tag">VGC & Showdown</span>
            <h2 className="game-title">
              POKÉMON <span className="gold">VGC</span>
            </h2>
            <p className="game-description">
              Desde el team building hasta el top cut. Analizamos el meta para
              que nuestros entrenadores alcancen la gloria.
            </p>
            <button className="btn-secondary">VER MÁS</button>
          </div>
          <div className="game-image">
            <img src={vgc} alt="Pokémon VGC" className="pokemon-image" />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
