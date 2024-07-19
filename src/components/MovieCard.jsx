// src/components/MovieCard.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/MovieCard.css';

const MovieCard = ({ title, author, publishDate, onAddFavorite, onRemoveFavorite, isFavorite }) => {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImage(data.message);
      } catch (error) {
        console.error('Error fetching dog image:', error);
      }
    };

    fetchDogImage();
  }, []);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      onRemoveFavorite(title);
    } else {
      onAddFavorite({ title, author, publishDate });
    }
  };

  return (
    <div className="movie-card">
      {dogImage && <img src={dogImage} alt="Dog" className="movie-image" />}
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{publishDate}</p>
        <button onClick={handleFavoriteClick}>
          {isFavorite ? 'Added to Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishDate: PropTypes.string,
  onAddFavorite: PropTypes.func.isRequired,
  onRemoveFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default MovieCard;
