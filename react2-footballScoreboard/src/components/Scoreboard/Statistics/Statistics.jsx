import classes from "./index.module.css";
function Statistics(props) {
  let widthBlue = (props.team1 / (props.team1 + props.team2)) * 100;
  let widthRed = (props.team2 / (props.team1 + props.team2)) * 100;
  if (props.team1 + props.team2 === 0) {
    widthBlue = 50;
    widthRed = 50;
  }
  return (
    <div className={classes.statistics}>
      <h3>{props.name}</h3>
      <div className={classes.statistics__container}>
        <b>{props.team1}</b>
        <div className={classes.statistics__bar}>
          <div
            className={classes.statistics__bar__red}
            style={{ width: `${widthBlue}%` }}
          ></div>
          <div
            className={classes.statistics__bar__blue}
            style={{ width: `${widthRed}%` }}
          ></div>
        </div>
        <b>{props.team2}</b>
      </div>
    </div>
  );
}
export default Statistics;
