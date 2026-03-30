import React from "react";
import logo from "../assets/logoSycel.png";
import "./Merch.css";
import equipacion from "../assets/sycelEquipacion.png";
import camiseta from "../assets/camisetaSycel.png";
import alfombrilla from "../assets/alfombrillaSycel.png";

const Merch = () => {
  const products = [
    {
      id: 1,
      name: "Alfombrilla Sycel",
      price: "???€",
      status: "PRÓXIMAMENTE",
      img: alfombrilla,
    },
    {
      id: 2,
      name: "Camiseta Sycel",
      price: "19,95€ + envío",
      status: "DISPONIBLE",
      img: camiseta,
    },
    {
      id: 3,
      name: "Equipación Sycel",
      price: "24,95€ + envío",
      status: "DISPONIBLE",
      img: equipacion,
    },
  ];

  return (
    <div className="merch-page">
      <header className="merch-header">
        <img src={logo} alt="Sycel Logo" className="merch-logo-small" />
        <h1 className="merch-title">TIENDA OFICIAL SYCEL</h1>
        <div className="merch-divider"></div>
      </header>

      <main className="merch-container">
        <div className="merch-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.img} alt={product.name} />
                {product.status !== "DISPONIBLE" && (
                  <div className="product-overlay">
                    <span>{product.status}</span>
                  </div>
                )}
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <a
                  href="https://forms.gle/uMJNBc54cX54G8US9"
                  target="_blank"
                  className={`buy-button ${product.status !== "DISPONIBLE" ? "disabled" : ""}`}
                  disabled={product.status !== "DISPONIBLE"}
                >
                  {(product.status = "COMPRAR")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="merch-footer">
        <p>ENVÍOS A TODA ESPAÑA · SYCEL ESPORTS CLUB</p>
      </footer>
    </div>
  );
};

export default Merch;
