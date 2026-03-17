import React from "react";

const PlayerCard = ({ name, role, image }) => {
  return (
    <div className="player-card">
      <div className="card-image-container">
        {/* La imagen ahora se ajustará al contenedor sin romperse */}
        <img src={image} className="card-image" alt={name} />
      </div>

      <div className="card-overlay">
        <p className="card-role">{role}</p>
        <h3 className="card-name">{name}</h3>

        {/* Usamos una etiqueta <a> para que el link funcione de verdad */}
        <a className="card-link" target="_blank" rel="noopener noreferrer">
          VER CONTENIDO +
        </a>
      </div>
    </div>
  );
};

export default PlayerCard;
