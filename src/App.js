// src/App.js
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Loading from './components/Loading';
import Error from './components/Error';
import { fetchMovies } from './api/fetchMovies';
import Navbar from './components/Navbar';
import './styles/GlobalStyles.css';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
    const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setSearchHistory(savedHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleSearch = async (query, sort, filterYear) => {
    setLoading(true);
    setError(null);
    try {
      const movieResults = await fetchMovies(query);
      let filteredMovies = movieResults;

      if (filterYear) {
        filteredMovies = filteredMovies.filter(movie => {
          return movie.publishDate && movie.publishDate.toString().startsWith(filterYear);
        });
      }

      if (sort === 'title') {
        filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sort === 'author') {
        filteredMovies.sort((a, b) => a.author.localeCompare(b.author));
      }

      setMovies(filteredMovies);
      setSearchHistory([...searchHistory, query]);
    } catch (err) {
      setError('Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  };

  const handleAddFavorite = (movie) => {
    setFavorites([...favorites, movie]);
  };

  const handleRemoveFavorite = (title) => {
    setFavorites(favorites.filter((movie) => movie.title !== title));
  };

  return (
    <div className='app'>
      <Navbar />
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        {loading && <Loading />}
        {error && <Error message={error} />}
        {!loading && !error && (
          <>
            <h2>Search Results</h2>
            <MovieList
              movies={movies}
              onAddFavorite={handleAddFavorite}
              onRemoveFavorite={handleRemoveFavorite}
              favorites={favorites}
            />
            <h2>Favorites</h2>
            <div className="favorites">
              <MovieList
                movies={favorites}
                onAddFavorite={handleAddFavorite}
                onRemoveFavorite={handleRemoveFavorite}
                favorites={favorites}
              />
            </div>
            <h2>Search History</h2>
            <div className="search-history">
              <ul>
                {searchHistory.map((query, index) => (
                  <li key={index}>{query}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
