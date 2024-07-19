// src/components/SearchBar.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('title');
  const [filterYear, setFilterYear] = useState('');

  const handleSearch = () => {
    onSearch(query, sort, filterYear);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      <div className="filters">
        <label>
          Sort by:
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="sort-select">
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="year">Year</option>
          </select>
        </label>
        <label>
          Filter by Year:
          <input
            type="number"
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
            placeholder="Year"
            className="year-input"
          />
        </label>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
