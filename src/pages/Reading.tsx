import React, { useState } from 'react';
import './Reading.css';
import { FaPlay, FaPlus, FaThumbsUp, FaTimes } from 'react-icons/fa';
import atomicHabits from '../images/atomic_habits.jpg';
import richDadPoorDad from '../images/rich_dad_poor_dad.jpg';

interface Book {
  title: string;
  author: string;
  imgSrc: string;
  description: string;
  year: string;
  pages: string;
  match: string;
  genres: string[];
}

const books: Book[] = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    imgSrc: atomicHabits,
    description: "A practical guide to building good habits, breaking bad ones, and mastering the tiny behaviors that lead to remarkable results. Focuses on systems rather than goals.",
    year: "2018",
    pages: "320 pages",
    match: "99% Match",
    genres: ["Self-Help", "Personal Development", "Psychology"]
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    imgSrc: richDadPoorDad,
    description: "An eye-opener on wealth, assets, and financial literacy. Explores the differences in mindset between the rich, the poor, and the middle class regarding money and investing.",
    year: "1997",
    pages: "336 pages",
    match: "98% Match",
    genres: ["Personal Finance", "Business", "Investing"]
  },
];

const Reading: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const openModal = (book: Book) => {
    setSelectedBook(book);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedBook(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Books That Shaped My Journey</h2>
      <p className="reading-intro">These books have influenced my perspectives, motivation, and self-growth.</p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div 
            key={index} 
            className="book-card" 
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            onClick={() => openModal(book)}
          >
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedBook && (
        <div className="movie-modal-overlay" onClick={closeModal}>
          <div className="movie-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal} aria-label="Close modal">
              <FaTimes />
            </button>
            <div className="modal-banner">
              <img src={selectedBook.imgSrc} alt={selectedBook.title} className="modal-banner-image" />
              <div className="modal-banner-fade"></div>
              <div className="modal-banner-text">
                <h2 className="modal-title">{selectedBook.title}</h2>
                <div className="modal-actions">
                  <button className="modal-play-btn" onClick={() => alert(`Opening Sample for ${selectedBook.title}...`)}>
                    <FaPlay style={{ marginRight: '8px' }} /> Read Sample
                  </button>
                  <button className="modal-round-btn" aria-label="Add to Reading List">
                    <FaPlus />
                  </button>
                  <button className="modal-round-btn" aria-label="Recommend">
                    <FaThumbsUp />
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-details">
              <div className="modal-details-left">
                <div className="modal-meta-row">
                  <span className="match-text">{selectedBook.match}</span>
                  <span className="meta-info">{selectedBook.year}</span>
                  <span className="meta-info">{selectedBook.pages}</span>
                  <span className="hd-tag">PDF</span>
                </div>
                <p className="modal-desc">{selectedBook.description}</p>
              </div>

              <div className="modal-details-right">
                <div className="info-item">
                  <span className="info-label">Author: </span>
                  <span className="info-value">{selectedBook.author}</span>
                </div>
                <div className="info-item" style={{ marginTop: '12px' }}>
                  <span className="info-label">Genres: </span>
                  <span className="info-value">{selectedBook.genres.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reading;
