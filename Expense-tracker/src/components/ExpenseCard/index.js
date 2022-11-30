import classes from "./index.module.css";

function ExpenseCard() {
  return (
    <div class={classes.container}>
      <div>Date</div>
      <div>Title</div>
      <div>Price</div>
    </div>
  );
}

export default ExpenseCard;
