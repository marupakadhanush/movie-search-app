// src/api/fetchMovies.js
export const fetchMovies = async (query) => {
  const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
  const data = await response.json();
  return data.docs.map((doc) => ({
    title: doc.title,
    author: doc.author_name ? doc.author_name.join(', ') : 'Unknown Author',
    coverId: doc.cover_i,
    key: doc.key,
    publishDate: doc.first_publish_year, // Ensure year is included
  }));
};
