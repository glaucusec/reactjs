import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expense">
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={props.title} amount={props.amount} />
      </Card>
    </div>
  );
};

export default ExpenseItem;
