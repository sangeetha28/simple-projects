import classes from "./index.module.css";

function ExpenseCard({ item }) {
  console.log("item", item);
  const { title, amount, date } = item;

  const year = date.getFullYear();
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const day = date.toLocaleDateString("en-US", { day: "2-digit" });

  return (
    <div className={classes.container}>
      <div className={classes.date}>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className={classes.title}>{title}</div>
      <div className={classes.price}>${amount}</div>
    </div>
  );
}

export default ExpenseCard;
