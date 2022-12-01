import { useState } from "react";
import classes from "./index.module.css";

const NewExpenseForm = (props) => {
  const { expenseItemHandler, expenseFormHandler } = props;
  const [input, setInput] = useState({ title: "", price: "", date: "" });

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = { ...input, id: Math.random().toString() };

    expenseItemHandler(expenseData);
  };

  const titleChangeHandler = (event) => {
    setInput((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  const priceChangeHandler = (event) => {
    setInput((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const dateChangeHandler = (event) => {
    setInput((prevState) => ({
      ...prevState,
      date: event.target.value,
    }));
  };

  return (
    <div className={classes.container}>
      <button
        className={classes.back}
        onClick={() => expenseFormHandler(false)}
      >
        Back
      </button>
      <form onSubmit={submitHandler} className={classes.formContainer}>
        <div className={classes.inputContainer}>
          <label htmlFor="title">Title</label>
          <input id="title" value={input.title} onChange={titleChangeHandler} />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="price">Price</label>
          <input id="price" value={input.price} onChange={priceChangeHandler} />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={input.date}
            onChange={dateChangeHandler}
          />
        </div>
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default NewExpenseForm;
