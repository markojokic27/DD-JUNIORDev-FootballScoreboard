import classes from "./index.module.css";
function Control(props) {
  return (
    <div className={classes.controll}>
      <div className={`${classes.controll__buttons}`}>
        <button
          className={classes.controll__green}
          onClick={() => props.update(1, props.property, true)}
        >
          +
        </button>
        <button
          className={classes.controll__red}
          onClick={() => props.update(1, props.property, false)}
        >
          -
        </button>
      </div>
      <h3>{props.name}</h3>
      <div className={`${classes.controll__buttons}`}>
        <button
          className={classes.controll__green}
          onClick={() => props.update(2, props.property, true)}
        >
          +
        </button>
        <button
          className={classes.controll__red}
          onClick={() => props.update(2, props.property, false)}
        >
          -
        </button>
      </div>
    </div>
  );
}
export default Control;
