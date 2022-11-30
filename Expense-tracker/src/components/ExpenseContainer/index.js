import NewExpense from "../NewExpense/index";
import Filter from "../Filter/index";
import FilterGraph from "../FilterGraph/index";
import NewExpenseItemList from "../NewExpenseItemList/index";
import classes from "./index.module.css";

const ExpenseContainer = () => {
  return (
    <div class={classes.container}>
      <NewExpense />
      <div class={classes.mainContainer}>
        <Filter />
        <FilterGraph />
        <NewExpenseItemList />
      </div>
    </div>
  );
};

export default ExpenseContainer;
