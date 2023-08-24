import React, { useState, useEffect, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import MovieForm from "./components/MovieForm";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryTimeout, setRetryTimeout] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });

      setMovies(transformedMovies);
    } catch (error) {
      setError("Something went wrong!");
      // Retry after 5 seconds
      const timeout = setTimeout(fetchMoviesHandler, 5000);
      setRetryTimeout(timeout);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log("I am the first one");
    fetchMoviesHandler();

    return () => {
      if (retryTimeout) {
        clearTimeout(retryTimeout);
      }
    };
  }, [fetchMoviesHandler]);

  function cancelRetryHandler() {
    setError(null);
    setIsLoading(false);
    if (retryTimeout) {
      clearTimeout(retryTimeout); // Clear the retry timeout
      setRetryTimeout(null);
    }
  }

  let content;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = (
      <p>
        {error}...Retrying in 5 seconds.
        <button onClick={cancelRetryHandler}>Cancel</button>
      </p>
    );
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <React.Fragment>
      <section>
        <MovieForm />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
