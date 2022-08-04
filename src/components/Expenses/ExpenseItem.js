import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const dateProp = props.date;
  const clickHandler = () => {
    setTitle("Updated");
    console.log("Clicked on " + title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button className="btn-primary" onClick={clickHandler}>
        Edit
      </button>
    </Card>
  );
};

export default ExpenseItem;
