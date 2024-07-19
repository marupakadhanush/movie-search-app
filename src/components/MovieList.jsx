// src/components/MovieList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const MovieList = ({ movies = [], onAddFavorite, onRemoveFavorite, favorites = [] }) => {
  // Create a set of favorite movie titles for quick lookup
  const favoriteTitles = new Set(favorites.map((movie) => movie.title));

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.title}
          title={movie.title}
          author={movie.author}
          publishDate={movie.publishDate}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
          isFavorite={favoriteTitles.has(movie.title)}
        />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
  onAddFavorite: PropTypes.func.isRequired,
  onRemoveFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array
};

export default MovieList;
