import React from "react";

const TournamentCard = ({ tag, title, description, image }) => {
  return (
    <div className="tournament-card">
      <div className="tournament-info">
        <span className="tournament-tag">{tag}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="tournament-image-container">
        <img src={image} alt={title} className="tournament-img" />
      </div>
    </div>
  );
};

export default TournamentCard;
