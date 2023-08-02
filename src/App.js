import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import FilterExpense from "./components/Expenses/FilterExpense";
import ExpensesList from "./components/Expenses/ExpensesList";
import AddExpenseButton from "./components/NewExpense/AddExpenseButton";

const App = () => {
  let DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Mobile",
      amount: 4500,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
    changeShowNewExpenseForm(false);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let [showNewExpenseForm, changeShowNewExpenseForm] = useState(false);

  let showNewExpenseFormHandler = (show) => {
    changeShowNewExpenseForm(show);
  };
  let ExpenseContent =
    showNewExpenseForm === false ? (
      <AddExpenseButton handler={showNewExpenseFormHandler} />
    ) : (
      <NewExpense
        handler={showNewExpenseFormHandler}
        onAddExpense={addExpenseHandler}
      />
    );

  return (
    <div>
      {ExpenseContent}
      <div className="expense">
        <FilterExpense
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </div>
    </div>
  );
};

export default App;
