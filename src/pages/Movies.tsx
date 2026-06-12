import React, { useState } from 'react';
import './Movies.css';
import { FaPlay, FaPlus, FaThumbsUp, FaTimes } from 'react-icons/fa';

import breakingBadImg from '../images/breaking_bad_poster.jpg';
import threeIdiotsImg from '../images/3_idiots_poster.jpg';
import interstellarImg from '../images/interstellar_poster.jpg';
import moneyHeistImg from '../images/money_heist_poster.jpg';
import squidGameImg from '../images/squid_game_poster.jpg';
import strangerThingsImg from '../images/stranger_things_poster.jpg';
import mirzapurImg from '../images/mirzapur_poster.jpg';

interface Movie {
  title: string;
  type: 'Movie' | 'TV Series';
  match: string;
  year: string;
  duration: string;
  description: string;
  cast: string[];
  genres: string[];
  imgSrc: string;
}

const moviesData: Movie[] = [
  {
    title: "Breaking Bad",
    type: "TV Series",
    match: "99% Match",
    year: "2013",
    duration: "5 Seasons",
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student to secure his family's future.",
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Bob Odenkirk"],
    genres: ["Crime", "Drama", "Thriller"],
    imgSrc: breakingBadImg
  },
  {
    title: "3 Idiots",
    type: "Movie",
    match: "98% Match",
    year: "2009",
    duration: "2h 50m",
    description: "Two friends search for their long-lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently and chase excellence rather than success.",
    cast: ["Aamir Khan", "R. Madhavan", "Sharman Joshi", "Kareena Kapoor"],
    genres: ["Comedy", "Drama"],
    imgSrc: threeIdiotsImg
  },
  {
    title: "Interstellar",
    type: "Movie",
    match: "97% Match",
    year: "2014",
    duration: "2h 49m",
    description: "When Earth becomes uninhabitable, a team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival and find a new home among the stars.",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    genres: ["Sci-Fi", "Adventure", "Drama"],
    imgSrc: interstellarImg
  },
  {
    title: "Money Heist",
    type: "TV Series",
    match: "96% Match",
    year: "2021",
    duration: "5 Parts",
    description: "An unusual group of robbers attempt to carry out the most perfect heist in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain, masterminded by 'The Professor'.",
    cast: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño", "Pedro Alonso"],
    genres: ["Action", "Crime", "Thriller"],
    imgSrc: moneyHeistImg
  },
  {
    title: "Squid Game",
    type: "TV Series",
    match: "95% Match",
    year: "2021",
    duration: "1 Season",
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
    cast: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-jun", "Jung Ho-yeon"],
    genres: ["Thriller", "Drama", "Mystery"],
    imgSrc: squidGameImg
  },
  {
    title: "Stranger Things",
    type: "TV Series",
    match: "97% Match",
    year: "2022",
    duration: "4 Seasons",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    cast: ["Winona Ryder", "David Harbour", "Millie Bobby Brown", "Finn Wolfhard"],
    genres: ["Sci-Fi", "Drama", "Mystery"],
    imgSrc: strangerThingsImg
  },
  {
    title: "Mirzapur",
    type: "TV Series",
    match: "98% Match",
    year: "2024",
    duration: "3 Seasons",
    description: "A shocking incident at a wedding procession ignites a series of events, entangling the lives of two families in the lawless city of Mirzapur.",
    cast: ["Pankaj Tripathi", "Ali Fazal", "Divyenndu", "Shweta Tripathi"],
    genres: ["Crime", "Drama", "Action"],
    imgSrc: mirzapurImg
  }
];

const Movies: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMovie(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="movies-page-container">
      <div className="movies-header-section">
        <h2 className="movies-title">🎬 Favorite Movies & Series</h2>
        <p className="movies-intro">A selection of cinematic masterpieces and stories that inspired me.</p>
      </div>

      <div className="movies-grid">
        {moviesData.map((movie, index) => (
          <div
            key={index}
            className="movies-page-card"
            onClick={() => openModal(movie)}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <img src={movie.imgSrc} alt={movie.title} className="movies-page-card-image" />
            <div className="movies-page-card-overlay">
              <h4 className="movies-page-card-title">{movie.title}</h4>
              <div className="movies-page-card-meta">
                <span className="movies-match">{movie.match}</span>
                <span className="movies-type">{movie.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="movie-modal-overlay" onClick={closeModal}>
          <div className="movie-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal} aria-label="Close modal">
              <FaTimes />
            </button>
            <div className="modal-banner">
              <img src={selectedMovie.imgSrc} alt={selectedMovie.title} className="modal-banner-image" />
              <div className="modal-banner-fade"></div>
              <div className="modal-banner-text">
                <h2 className="modal-title">{selectedMovie.title}</h2>
                <div className="modal-actions">
                  <button className="modal-play-btn" onClick={() => alert(`Playing ${selectedMovie.title} Trailer...`)}>
                    <FaPlay style={{ marginRight: '8px' }} /> Play Trailer
                  </button>
                  <button className="modal-round-btn" aria-label="Add to List">
                    <FaPlus />
                  </button>
                  <button className="modal-round-btn" aria-label="Like">
                    <FaThumbsUp />
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-details">
              <div className="modal-details-left">
                <div className="modal-meta-row">
                  <span className="match-text">{selectedMovie.match}</span>
                  <span className="meta-info">{selectedMovie.year}</span>
                  <span className="meta-info">{selectedMovie.duration}</span>
                  <span className="hd-tag">HD</span>
                </div>
                <p className="modal-desc">{selectedMovie.description}</p>
              </div>

              <div className="modal-details-right">
                <div className="info-item">
                  <span className="info-label">Cast: </span>
                  <span className="info-value">{selectedMovie.cast.join(', ')}</span>
                </div>
                <div className="info-item" style={{ marginTop: '12px' }}>
                  <span className="info-label">Genres: </span>
                  <span className="info-value">{selectedMovie.genres.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
