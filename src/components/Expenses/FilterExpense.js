import React from "react";
import "./FilterExpense.css";

const FilterExpense = (props) => {
  const handleFilterChange = (event) => {
    props.onFilterChange(event.target.value);
  };
  return (
    <div className="container">
      <div className="filter_text">Filter by Year</div>
      <div className="filter_button">
        <select
          value={props.selected}
          onChange={handleFilterChange}
          className="filter_year"
        >
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
    </div>
  );
};

export default FilterExpense;
