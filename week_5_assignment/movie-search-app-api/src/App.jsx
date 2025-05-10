import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(true);

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
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen w-full bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-300 text-white dark:text-black px-5 py-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">Movie Search App</h1>

        <div className="flex flex-col sm:flex-row mb-8 w-full max-w-xl">
          <input
            type="text"
            placeholder="Search for a movie"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-2 rounded-l sm:rounded-l-md sm:rounded-r-none flex-1 mb-3 sm:mb-0 font-bold dark:text-white dark:bg-gray-700 dark:border-gray-600 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:placeholder:text-gray-100"
          />
          <button
            onClick={getMovies}
            className="bg-red-500 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded sm:rounded-r-md sm:rounded-l-none"
          >
            Search
          </button>
        </div>

        {error && <p className="text-red-400 font-semibold mb-5">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {movies.length > 0 && !error ? (
            movies.map((movie) => (
              <div
                className="bg-white/10 dark:bg-black/10 rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105"
                key={movie.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{movie.title}</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-700">{movie.release_date}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="italic">No movies to display.</p>
          )}
        </div>

        <div className="mt-10 w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4 text-center">Suggested Movies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['The Dark Knight', 'Inception', 'Avengers: Endgame', 'Interstellar', 'The Shawshank Redemption'].map(
              (title, index) => (
                <div
                  key={index}
                  className="bg-white/10 dark:bg-black/10 px-6 py-3 rounded-lg border border-gray-500"
                >
                  <h3 className="text-base">{title}</h3>
                </div>
              )
            )}
          </div>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-full shadow-lg"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  );
};

export default App;
