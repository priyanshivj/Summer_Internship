import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const getMovies = async () => {
    if (!query.trim()) {
      setError('Please enter a movie name.');
      setMovies([]);
      return;
    }

    try {
      const apiKey = 'e71541afd1d50b86b95be31152165d63';
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
      );
      const data = await response.json();
      if (data.results.length === 0) {
        setError('No movies found.');
      } else {
        setMovies(data.results);
        setError('');
      }
    } catch {
      setError('Something went wrong!');
      setMovies([]);
    }
  };

  useEffect(() => {
    // Fetching some popular movies on initial load
    const fetchPopularMovies = async () => {
      const apiKey = 'e71541afd1d50b86b95be31152165d63';
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      );
      const data = await response.json();
      setMovies(data.results);
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Movie Search App</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={getMovies} className="search-btn">
          Search
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="movies">
        {movies.length > 0 && !error ? (
          movies.map((movie) => (
            <div className="movie" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-movie">No movies to display.</p>
        )}
      </div>

      <div className="suggestions">
        <h2>Suggested Movies</h2>
        <div className="movie-suggestions">
          <div className="movie-suggestion">
            <h3>The Dark Knight</h3>
          </div>
          <div className="movie-suggestion">
            <h3>Inception</h3>
          </div>
          <div className="movie-suggestion">
            <h3>Avengers: Endgame</h3>
          </div>
          <div className="movie-suggestion">
            <h3>Interstellar</h3>
          </div>
          <div className="movie-suggestion">
            <h3>The Shawshank Redemption</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
