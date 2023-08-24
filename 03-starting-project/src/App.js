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
      const response = await fetch(
        "https://react-http-b1565-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].text,
          releaseDate: data[key].date,
        });
      }

      setMovies(loadedMovies);
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

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-http-b1565-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      fetchMoviesHandler();
    }
  }

  async function onDeleteHandler(id) {
    const response = await fetch(
      `https://react-http-b1565-default-rtdb.firebaseio.com/movies/${id}.json`, // Adjust the URL to target a specific movie
      {
        method: "PUT", // Or "PATCH"
        body: JSON.stringify(null), // Sending null to remove the data
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      fetchMoviesHandler();
    }
  }

  let content;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} onDeleteHandler={onDeleteHandler} />;
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
        <MovieForm onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
