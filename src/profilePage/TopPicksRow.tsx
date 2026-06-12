import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaCode, FaBriefcase, FaCertificate, FaProjectDiagram, FaEnvelope, FaMusic, FaBook } from 'react-icons/fa';

import projectsBanner from '../images/projects_banner.jpg';
import skillsBanner from '../images/skills_banner.jpg';
import experienceBanner from '../images/experience_banner.jpg';
import certificationsBanner from '../images/certifications_banner.jpg';
import musicBanner from '../images/Hotelcalifornia.jpg';
import readingBanner from '../images/atomic_habits.jpg';
import contactMeBanner from '../images/contact_me_banner.png';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Skills", imgSrc: skillsBanner, icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: experienceBanner, icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: certificationsBanner, icon: <FaCertificate />, route: "/certifications" },
    { title: "Projects", imgSrc: projectsBanner, icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Contact Me", imgSrc: contactMeBanner, icon: <FaEnvelope />, route: "/contact-me" }
  ],
  developer: [
    { title: "Skills", imgSrc: skillsBanner, route: "/skills", icon: <FaCode /> },
    { title: "Projects", imgSrc: projectsBanner, route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Certifications", imgSrc: certificationsBanner, route: "/certifications", icon: <FaCertificate /> },
    { title: "Experience", imgSrc: experienceBanner, route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Contact Me", imgSrc: contactMeBanner, route: "/contact-me", icon: <FaEnvelope /> }
  ],
  stalker: [
    { title: "Contact Me", imgSrc: contactMeBanner, route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Projects", imgSrc: projectsBanner, icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Experience", imgSrc: experienceBanner, icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: certificationsBanner, icon: <FaCertificate />, route: "/certifications" },
  ],
  adventure: [
    { title: "Music", imgSrc: musicBanner, route: "/music", icon: <FaMusic /> },
    { title: "Projects", imgSrc: projectsBanner, route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Reading", imgSrc: readingBanner, route: "/reading", icon: <FaBook /> },
    { title: "Contact Me", imgSrc: contactMeBanner, route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Certifications", imgSrc: certificationsBanner, route: "/certifications", icon: <FaCertificate /> }
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  const capitalizedProfile = profile === 'adventure' ? 'Adventurer' : profile.charAt(0).toUpperCase() + profile.slice(1);

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Explore My Profile ({capitalizedProfile})</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
