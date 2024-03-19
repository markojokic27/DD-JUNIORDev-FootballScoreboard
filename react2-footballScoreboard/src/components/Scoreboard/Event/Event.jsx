import classes from "./index.module.css";

function Event(props) {
  if (props.event.team === 1) {
    return (
      <div className={classes.event}>
        <img src={props.event.image} alt="" className={classes.event__image} />
        <p>
          {props.event.time}´ {props.event.player}
        </p>
      </div>
    );
  }
  return (
    <div className={classes.event}>
      <p>
        {props.event.player} {props.event.time}´
      </p>
      <img src={props.event.image} alt="" className={classes.event__image} />
    </div>
  );
}
export default Event;
