import classes from "./index.module.css";

function UserList(props) {
  return (
    <div className={classes.container}>
      <ul>
        {props.userList.map((e, index) => (
          <li key={index}>
            <div className={classes.inputContainer}>
              {`${e.title} ( ${e.age} Years old )`}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
