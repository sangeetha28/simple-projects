import classes from "./index.module.css";

function Error(props) {
  const { setShowErrorModal } = props;

  return (
    <div className={classes.container}>
      <div>Invalid Title / Age</div>
      <p>{props.error}</p>
      <button
        className={classes.backButton}
        onClick={() => setShowErrorModal()}
      >
        {" "}
        Back
      </button>
    </div>
  );
}

export default Error;
