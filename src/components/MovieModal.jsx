// src/components/MovieModal.jsx
import React from 'react';
import '../styles/MovieModal.css';

const MovieModal = ({ title, author, publishDate, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>{title}</h2>
        <p><strong>Author:</strong> {author}</p>
        <p><strong>Publish Date:</strong> {publishDate}</p>
        <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default MovieModal;
