import { useState } from "react";
import NewExpense from "../NewExpense/index";
import Filter from "../Filter/index";
import FilterGraph from "../FilterGraph/index";
import NewExpenseItemList from "../NewExpenseItemList/index";
import classes from "./index.module.css";

const expenses = [
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
];

const ExpenseContainer = () => {
  const [expensesList, setExpensesList] = useState(expenses);
  const [filteredYear, setFilteredYear] = useState("2022");

  const onSelectHandler = (year) => {
    setFilteredYear(year);
  };

  const expenseHandler = (item) => {
    setExpensesList((prevState) => [...prevState, item]);
  };

  return (
    <div className={classes.container}>
      <NewExpense expenseHandler={expenseHandler} />
      <div className={classes.mainContainer}>
        <Filter selected={filteredYear} onSelectHandler={onSelectHandler} />
        <FilterGraph />
        <NewExpenseItemList expensesList={expensesList} />
      </div>
    </div>
  );
};

export default ExpenseContainer;
