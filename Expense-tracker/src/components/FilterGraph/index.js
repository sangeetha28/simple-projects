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
    <div>
      <ul className={classes.container}>
        {[...new Array(12).keys()].map((e) => (
          <li key={e}>
            <div className={classes.graphItems}>
              <div className={classes.graphItem}></div>
              <p>{months[e]}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterGraph;
