import { useEffect, useState } from "react";
import classes from "./index.module.css";

const months = [
  { label: "Jan", value: 0 },
  { label: "Feb", value: 0 },
  { label: "Mar", value: 0 },
  { label: "Apr", value: 0 },
  { label: "May", value: 0 },
  { label: "Jun", value: 0 },
  { label: "Jul", value: 0 },
  { label: "Aug", value: 0 },
  { label: "Sep", value: 0 },
  { label: "Oct", value: 0 },
  { label: "Nov", value: 0 },
  { label: "Dec", value: 0 },
];

function FilterGraph({ points }) {
  const [dataPointList, setDataPointList] = useState(months);
  useEffect(() => {
    points.forEach((item) => {
      months[item.month].value += item.amount;
    });
    const dataPointValues = months.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    const arrayWithBarFillHeight = months.map((item) => ({
      ...item,
      barFillHeight: Math.round((item.value / totalMaximum) * 100) + "%",
    }));
    setDataPointList(arrayWithBarFillHeight);
  }, [points]);

  return (
    <div>
      <ul className={classes.container}>
        {dataPointList.map((e, index) => (
          <li key={index}>
            <div className={classes.graphItems}>
              <div className={classes.graphItem}>
                <div
                  className={classes.chartBarFill}
                  style={{ height: e.barFillHeight }}
                ></div>
              </div>
              <p>{e.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterGraph;
