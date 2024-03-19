import classes from "./index.module.css";

function Club(props) {
  return (
    <div className={classes.club}>
      <img src={props.image} alt="club image" className={classes.club__image} />
      <h2>{props.name}</h2>
    </div>
  );
}
export default Club;
