import React, { useState } from 'react';
import './Music.css';
import { FaPlay, FaPlus, FaThumbsUp, FaTimes } from 'react-icons/fa';
import albumCover1 from '../images/Hotelcalifornia.jpg'; // Hotel California by The Eagles
import albumCover2 from '../images/ac-dc.jpg'; // Back in Black by AC/DC
import albumCover3 from '../images/guns-n-roses.webp'; // Appetite for Destruction by Guns N' Roses

interface Album {
  title: string;
  artist: string;
  imgSrc: string;
  match: string;
  year: string;
  duration: string;
  genres: string[];
  description: string;
  spotifyLink: string;
}

const favoriteGenres = ["Rock", "Classic Rock", "Hard Rock", "Blues", "Alternative"];
const favoriteAlbums: Album[] = [
  { 
    title: "Hotel California", 
    artist: "The Eagles", 
    imgSrc: albumCover1,
    match: "99% Match",
    year: "1976",
    duration: "9 Tracks",
    genres: ["Classic Rock", "Soft Rock"],
    description: "The Eagles' career-defining masterpiece, exploring themes of materialism, loss of innocence, and the dark underbelly of the American dream. Features legendary guitar solos and harmonies.",
    spotifyLink: "https://open.spotify.com/track/40riOy72G6M1jVW1ptz7uE"
  },
  { 
    title: "Back in Black", 
    artist: "AC/DC", 
    imgSrc: albumCover2,
    match: "98% Match",
    year: "1980",
    duration: "10 Tracks",
    genres: ["Hard Rock", "Heavy Metal"],
    description: "AC/DC's ultimate tribute to late lead singer Bon Scott. Driven by legendary riffs and high-octane energy, it remains one of the best-selling studio albums of all time.",
    spotifyLink: "https://open.spotify.com/track/08mG3Y1vljd9KdZ4bg4p4C"
  },
  { 
    title: "Appetite for Destruction", 
    artist: "Guns N' Roses", 
    imgSrc: albumCover3,
    match: "97% Match",
    year: "1987",
    duration: "12 Tracks",
    genres: ["Hard Rock", "Glam Metal"],
    description: "The explosive debut album that defined late-80s hard rock. Raw energy, soaring vocals by Axl Rose, and iconic guitar solos by Slash deliver a classic rock staple.",
    spotifyLink: "https://open.spotify.com/track/7o2CTHR4VTu7vUiZtdIp0F"
  },
];

const Music: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  const openModal = (album: Album) => {
    setSelectedAlbum(album);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedAlbum(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="music-page">
      <div className="quote">
        <p>“Rock and Roll isn’t a genre, it’s a way of life.” 🎸</p>
      </div>

      <div className="genre-section">
        <h3>Explore by Genre</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div key={index} className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Favorite Albums</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <div 
              key={index} 
              className="album-card" 
              style={{ animationDelay: `${index * 0.3}s` }}
              onClick={() => openModal(album)}
            >
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedAlbum && (
        <div className="movie-modal-overlay" onClick={closeModal}>
          <div className="movie-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal} aria-label="Close modal">
              <FaTimes />
            </button>
            <div className="modal-banner">
              <img src={selectedAlbum.imgSrc} alt={selectedAlbum.title} className="modal-banner-image" />
              <div className="modal-banner-fade"></div>
              <div className="modal-banner-text">
                <h2 className="modal-title">{selectedAlbum.title}</h2>
                <div className="modal-actions">
                  <button className="modal-play-btn" onClick={() => window.open(selectedAlbum.spotifyLink, '_blank')}>
                    <FaPlay style={{ marginRight: '8px' }} /> Play Album
                  </button>
                  <button className="modal-round-btn" aria-label="Add to Queue">
                    <FaPlus />
                  </button>
                  <button className="modal-round-btn" aria-label="Favorite">
                    <FaThumbsUp />
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-details">
              <div className="modal-details-left">
                <div className="modal-meta-row">
                  <span className="match-text">{selectedAlbum.match}</span>
                  <span className="meta-info">{selectedAlbum.year}</span>
                  <span className="meta-info">{selectedAlbum.duration}</span>
                  <span className="hd-tag">HQ</span>
                </div>
                <p className="modal-desc">{selectedAlbum.description}</p>
              </div>

              <div className="modal-details-right">
                <div className="info-item">
                  <span className="info-label">Artist: </span>
                  <span className="info-value">{selectedAlbum.artist}</span>
                </div>
                <div className="info-item" style={{ marginTop: '12px' }}>
                  <span className="info-label">Genres: </span>
                  <span className="info-value">{selectedAlbum.genres.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Music;
