import { useState } from "react";
import UserForm from "../UserForm";
import UserList from "../UserList";
import Error from "../Error";

import classes from "./index.module.css";

function Page() {
  const [userList, setUserList] = useState([]);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const submitHandler = (item) => {
    setUserList((prevState) => [...prevState, item]);
  };

  const errorHandler = () => {
    setShowErrorModal(true);
  };


  return (
    <div className={classes.container}>
      {showErrorModal && (
        <div
          onClick={() => setShowErrorModal(false)}
          className={classes.overlay}
        >
          <Error setShowErrorModal={setShowErrorModal} />
        </div>
      )}
      <UserForm onErrorHandler={errorHandler} submitHandler={submitHandler} />
      {userList.length > 0 && <UserList userList={userList} />}
    </div>
  );
}

export default Page;
