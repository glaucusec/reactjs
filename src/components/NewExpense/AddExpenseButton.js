import React from "react";
import "./NewExpense.css";

const AddExpenseButton = (props) => {
    const handleClick = () => {
        props.handler(true);
    }

  return (
    <div className="new-expense">
      <button onClick={handleClick} type="submit">
        Add New Expense
      </button>
    </div>
  );
};

export default AddExpenseButton;
