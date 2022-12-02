import { useState } from "react";

import classes from "./index.module.css";

function UserForm(props) {
  const [title, setTitle] = useState("");
  const [age, setAge] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (title.length ===0 || age.length === 0) {
      props.onErrorHandler();
      return;
    }

    props.submitHandler({ title, age });

    setTitle("");
    setAge("");
  };

  return (
    <form onSubmit={submitHandler} className={classes.container}>
      <div className={classes.inputContainer}>
        <label htmlFor="name">Username</label>
        <input id="name" value={title} onChange={titleChangeHandler} />
      </div>

      <div className={classes.inputContainer}>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" value={age} onChange={ageChangeHandler} />
      </div>
      <div className={classes.buttonContainer}>
        <button>Add User</button>
      </div>
    </form>
  );
}

export default UserForm;
