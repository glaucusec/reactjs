import React, { useState, Fragment } from "react";
import "./MovieForm.css";

export default function MovieForm(props) {
  function onSubmitHandler(e) {
    e.preventDefault();
    const movie = {
      title: e.target.title.value,
      text: e.target.openingText.value,
      date: e.target.date.value,
    };

    props.onAddMovie(movie);
  }
  return (
    <Fragment>
      <form onSubmit={onSubmitHandler}>
        <label for="name">Title text</label>
        <input type="text" name="title" />
        <br />
        <label type="text">Opening Text</label>
        <textarea name="openingText" />
        <br />
        <label type="date">Release Date</label>
        <input type="text" name="date" />
        <br />
        <button type="submit">Add Movie</button>
      </form>
    </Fragment>
  );
}
