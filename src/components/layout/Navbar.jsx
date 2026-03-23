import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logoSycel.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (e, x) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const element = document.getElementById(x);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(x);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };
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
        <Link to="/" onClick={(e) => handleScrollTo(e, "inicio")}>
          Inicio
        </Link>
        <a href="#creadores" onClick={(e) => handleScrollTo(e, "creadores")}>
          Creadores
        </a>
        <a href="#juegos" onClick={(e) => handleScrollTo(e, "juegos")}>
          Nuestros juegos
        </a>
        <Link to="/merch" className="btn-merch">
          Merchandising
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
