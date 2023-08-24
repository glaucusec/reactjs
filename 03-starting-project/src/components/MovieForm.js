import React, { useState, Fragment } from "react";
import "./MovieForm.css";

export default function MovieForm() {
  function onSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
  }
  return (
    <Fragment>
      <form onSubmit={onSubmitHandler}>
        <label for="name">Title text</label>
        <input type="text" name="title" />
        <br />
        <label type="text">Opening Text</label>
        <textarea name="opening-text" />
        <br />
        <label type="date">Release Date</label>
        <input type="text" name="date" />
        <br />
        <button type="submit">Add Movie</button>
      </form>
    </Fragment>
  );
}
