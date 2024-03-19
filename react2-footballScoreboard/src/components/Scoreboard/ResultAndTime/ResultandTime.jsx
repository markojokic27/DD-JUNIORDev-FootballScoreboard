import classes from "./index.module.css";
function ResultAndTime(props) {
  let seconds = props.clock.seconds;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return (
    <div className={classes.scoreboard}>
      <div className={classes.resultAndTime}>
        <div className={classes.result}>
          {props.team1Goals} : {props.team2Goals}
        </div>
        <div className={classes.time}></div>
        <h3>
          {props.clock.minutes} : {seconds}
        </h3>
      </div>
    </div>
  );
}
export default ResultAndTime;
