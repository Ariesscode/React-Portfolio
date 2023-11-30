// CustomCard.jsx
import React from 'react';
import { TbReportSearch } from "react-icons/tb";
import '../styles/projects.css';

const ProjectCard = ({ imageUrl, title, description, linkUrl, linkName, repoLink }) => {
  return (
    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 container-card">
      <div className="features-icons-icon d-flex">
        <img src={imageUrl} alt={title} className="m-auto" style={{width: '350px', height: '200px'}} />
      </div>
     
      <p className="lead mb-0">{description}</p>
      <div className="project-button">
      <a href={linkUrl}>{linkName}</a>
      </div>
      <div className="github-repo">
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <TbReportSearch className="github-repo-icon"/>  
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
