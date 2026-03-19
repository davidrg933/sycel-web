import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Merch from "./pages/Merch";
import Pokemon from "./pages/Pokemon";
import icerose from "./assets/iceroseLogo.avif";
import Inazuma from "./pages/Inazuma";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/inazuma" element={<Inazuma />} />
      </Routes>

      <footer
        style={{
          backgroundColor: "black",
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          padding: "40px",
          fontSize: "0.7rem",
        }}
      >
        © 2026 SYCEL ESPORTS CLUB
        <a
          href="https://iceroseclothes.com/"
          className="ice-rose-link"
          target="_blank"
        >
          <img src={icerose} alt="Ice Rose Merch" />
        </a>
      </footer>
    </div>
  );
}

export default App;
