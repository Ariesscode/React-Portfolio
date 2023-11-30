// CustomCard.jsx
import React from 'react';

const ProjectCard = ({ imageUrl, title, description, button }) => {
  return (
    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
      <div className="features-icons-icon d-flex">
        <img src={imageUrl} alt={title} className="m-auto" />
      </div>
      <h3>{title}</h3>
      <p className="lead mb-0">{description}</p>
      <div className="project-button">
        <button>{button}</button>
      </div>
    </div>
  );
};

export default ProjectCard;
