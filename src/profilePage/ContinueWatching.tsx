import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';
import musicBanner from '../images/Hotelcalifornia.jpg';
import readingBanner from '../images/atomic_habits.jpg';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Music", imgSrc: musicBanner, link: "/music" },
    { title: "Reading", imgSrc: readingBanner, link: "/reading" }
  ],
  developer: [
    { title: "Music", imgSrc: musicBanner, link: "/music" },
    { title: "Reading", imgSrc: readingBanner, link: "/reading" }
  ],
  stalker: [
    { title: "Reading", imgSrc: readingBanner, link: "/reading" }
  ],
  adventure: [
    { title: "Music", imgSrc: musicBanner, link: "/music" },
    { title: "Reading", imgSrc: readingBanner, link: "/reading" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  const capitalizedProfile = profile === 'adventure' ? 'Adventurer' : profile.charAt(0).toUpperCase() + profile.slice(1);

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {capitalizedProfile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
