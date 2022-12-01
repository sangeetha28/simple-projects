import classes from "./index.module.css";

function Filter(props) {
  const { selected, onSelectHandler } = props;

  const selectHandler = (event) => {
    onSelectHandler(event.target.value);
  };

  return (
    <div className={classes.container}>
      <p className={classes.filter}>Filter by Year</p>
      <div>
        <select value={selected} onChange={selectHandler}>
          <option value="2022">2022 </option>
          <option value="2021">2021 </option>
          <option value="2020">2020 </option>
          <option value="2019">2019 </option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
