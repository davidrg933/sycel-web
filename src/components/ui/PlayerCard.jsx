import React from "react";

const PlayerCard = ({ name, role, image }) => {
  return (
    <div className="player-card">
      <div className="card-image-container">
        <img src={image} className="card-image" alt={name} />
      </div>

      <div className="card-overlay">
        <h3 className="card-name">{name}</h3>
        <p className="card-role">{role}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
