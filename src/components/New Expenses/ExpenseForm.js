import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, newTitle] = useState("");
  const changeTitleHandler = (event) => {
    newTitle(event.target.value);
  };

  const [enteredAmount, newAmount] = useState("");
  const changeAmountHandler = (event) => {
    newAmount(event.target.value);
  };

  const [enteredDate, newDate] = useState("");
  const changeDateHandler = (event) => {
    newDate(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(newData);
    newTitle("");
    newAmount("");
    newDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={changeTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2030-01-01"
            value={enteredDate}
            onChange={changeDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
