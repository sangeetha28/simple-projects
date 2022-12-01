import { useEffect, useState } from "react";
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
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const dataPoints = expensesList.map((el) => ({
      month: el.date.getMonth(),
      amount: el.amount,
    }));
    setDataPoints(dataPoints);
  }, [expensesList]);

  const onSelectHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expensesList.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const expenseHandler = (item) => {
    setExpensesList((prevState) => [...prevState, item]);
  };

  return (
    <div className={classes.container}>
      <NewExpense expenseHandler={expenseHandler} />
      <div className={classes.mainContainer}>
        <Filter selected={filteredYear} onSelectHandler={onSelectHandler} />
        <FilterGraph points={dataPoints} />
        {filteredExpenses.length === 0 ? (
          <p className={classes.noResultText}>No results Found!</p>
        ) : (
          <NewExpenseItemList expensesList={filteredExpenses} />
        )}
      </div>
    </div>
  );
};

export default ExpenseContainer;
