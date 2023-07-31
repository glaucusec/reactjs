import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  let [price, setAmount] = useState(props.amount);

  const titleUpdater = () => {
    setTitle("Updated");
  };

  const priceUpdater = () => {
    price += 100;
    setAmount(price);
  };

  return (
    <div className="expense">
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={title} amount={price} />
        <button onClick={titleUpdater}>Change Title</button>
        <button onClick={priceUpdater}>Change Amount</button>
      </Card>
    </div>
  );
};

export default ExpenseItem;
