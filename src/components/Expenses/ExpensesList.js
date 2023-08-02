import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let filteredExpenses = props.items;

  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }

  if (filteredExpenses.length === 1) {
    return <>
      <ul className="expenses-list">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
      <h2 className="expenses-list__fallback">
        Only single Expense here. Please add more...
      </h2>
    </>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
