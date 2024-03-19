import Club from "./Club/Club";
import classes from "./index.module.css";
import ResultAndTime from "./ResultAndTime/ResultandTime";
import Statistics from "./Statistics/Statistics";
import Event from "./Event/Event";
function Scoreboard(props) {
  let date = new Date();
  return (
    <div className={classes.scoreboard}>
      <p>
        {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
      </p>
      <p>Stadion: Poljud</p>
      <div className={classes.scoreboard__clubs}>
        <Club name={props.team1.name} image={props.team1.image} />
        <ResultAndTime
          team1Goals={props.team1.goals}
          team2Goals={props.team2.goals}
          clock={props.clock}
        />
        <Club name={props.team2.name} image={props.team2.image} />
      </div>
      <div className={classes.scoreboard__events}>
        <div className={classes.scoreboard__eventsTeam1}>
          {props.events.map(
            (event, index) =>
              event.team === 1 && (
                <div key={index}>
                  <Event event={event} />
                </div>
              )
          )}
        </div>
        <div className={classes.scoreboard__eventsTeam2}>
          {props.events.map(
            (event, index) =>
              event.team === 2 && (
                <div key={index}>
                  <Event event={event} />
                </div>
              )
          )}
        </div>
      </div>
      <div className={classes.scoreboard__statistics}>
        <h2>Statistika</h2>
        <Statistics
          name="Udarci"
          team1={props.team1.shots}
          team2={props.team2.shots}
        />
        <Statistics
          name="Udarci u okvir"
          team1={props.team1.shotsOnGoal}
          team2={props.team2.shotsOnGoal}
        />
        <Statistics
          name="Zaleđa"
          team1={props.team1.offsides}
          team2={props.team2.offsides}
        />
        <Statistics
          name="Faulovi"
          team1={props.team1.fouls}
          team2={props.team2.fouls}
        />
        <Statistics
          name="Žuti kartoni"
          team1={props.team1.yellowCards}
          team2={props.team2.yellowCards}
        />
        <Statistics
          name="Crveni kartoni"
          team1={props.team1.redCards}
          team2={props.team2.redCards}
        />
      </div>
    </div>
  );
}
export default Scoreboard;
