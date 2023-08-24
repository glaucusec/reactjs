import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  function deleteHandler(movie_id) {
    props.onDeleteHandler(movie_id);
  }
  return (
    <React.Fragment>
      <li className={classes.movie}>
        <h2>{props.title}</h2>
        <h3>{props.releaseDate}</h3>
        <p>{props.openingText}</p>
      </li>
      <button onClick={() => deleteHandler(props.id)}>Delete</button>
    </React.Fragment>
  );
};

export default Movie;
