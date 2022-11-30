import classes from "./index.module.css";

const NewExpenseForm = (props) => {
  const { expenseFormHandler } = props;

  return (
    <div className={classes.container}>
      <button
        className={classes.back}
        onClick={() => expenseFormHandler(false)}
      >
        Back
      </button>
      <div className={classes.inputContainer}>
        <label htmlFor="title">Title</label>
        <input id="title" />
      </div>
      <div className={classes.inputContainer}>
        <label htmlFor="price">Price</label>
        <input id="price" />
      </div>
      <div className={classes.inputContainer}>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" />
      </div>
      <button>Add Expense</button>
    </div>
  );
};

export default NewExpenseForm;
