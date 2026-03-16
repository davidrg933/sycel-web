import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Merch from "./pages/Merch";
import icerose from "./assets/iceRoseLogo.avif";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merch" element={<Merch />} />
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
