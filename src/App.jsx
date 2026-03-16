import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Merch from "./pages/Merch";

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
      </footer>
    </div>
  );
}

export default App;
