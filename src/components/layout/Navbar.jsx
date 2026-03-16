import React from "react";
import { Link } from "react-router-dom"; // <-- Importa Link
import logo from "../../assets/logoSycel.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <Link to="/">
          {" "}
          <img src={logo} alt="Logo" className="nav-logo-img" />
        </Link>
        <span style={{ fontWeight: 900, letterSpacing: "-1px" }}>SYCEL</span>
      </div>

      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <a href="#creadores">Creadores</a>
        <a href="#juegos">Nuestros juegos</a>
        <Link to="/merch" className="btn-merch">
          Merchandising
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
