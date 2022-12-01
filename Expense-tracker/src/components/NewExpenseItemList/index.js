import ExpenseCard from "../ExpenseCard/index";
import classes from "./index.module.css";

const NewExpenseItemList = ({ expensesList }) => {
  return (
    <div>
      <ul className={classes.container}>
        {expensesList.map((item) => (
          <li key={item.id}>
            <ExpenseCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewExpenseItemList;
