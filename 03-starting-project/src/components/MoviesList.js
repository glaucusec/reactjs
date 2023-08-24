import React, { Fragment } from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  return (
    <Fragment>
      <ul className={classes["movies-list"]}>
        {props.movies.map((movie) => (
          <Movie
            onDeleteHandler={props.onDeleteHandler}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default MovieList;
