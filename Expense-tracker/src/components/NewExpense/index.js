import { useState } from "react";
import NewExpenseForm from "../NewExpenseForm";
import classes from "./index.module.css";

const NewExpense = () => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  return (
    <>
      {!showExpenseForm && (
        <div className={classes.container}>
          <button onClick={() => setShowExpenseForm(true)}>
            Show New Expense Form
          </button>{" "}
        </div>
      )}
      {showExpenseForm && (
        <NewExpenseForm expenseFormHandler={setShowExpenseForm} />
      )}
    </>
  );
};

export default NewExpense;
