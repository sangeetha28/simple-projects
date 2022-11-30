import classes from "./index.module.css";

function Filter() {
  return (
    <div className={classes.container}>
      <p className={classes.filter}>Filter by Year</p>
      <div>
        <select>
          <option>2022 </option>
          <option>2021 </option>
          <option>2020 </option>
          <option>2019 </option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
