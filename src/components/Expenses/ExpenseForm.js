import React from "react";

const ExpenseForm = () => {
  const handleInput = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <form>
        <label for="title">Title</label>
        <input onChange={handleInput} type="text" name="title" />

        <label for="amount">Amount</label>
        <input onChange={handleInput} type="text" name="amount" />

        <label for="date">Date</label>
        <input onChange={handleInput} type="date" name="date" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
