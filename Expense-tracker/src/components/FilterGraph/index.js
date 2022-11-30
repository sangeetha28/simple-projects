import classes from "./index.module.css";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function FilterGraph() {
  return (
    <div class={classes.container}>
      {[...new Array(12).keys()].map((e) => (
        <div class={classes.graphItems}>
          <div className={classes.graphItem} key={e}></div>
          <p>{months[e]}</p>
        </div>
      ))}
    </div>
  );
}

export default FilterGraph;
