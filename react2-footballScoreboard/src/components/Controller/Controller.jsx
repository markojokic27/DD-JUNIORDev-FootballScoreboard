import Control from './Control/Control';
import classes from './index.module.css'
function Controller(props) {
  return (
    <div className={classes.controller}>
      <h2>Kontroler</h2>
      <div className={classes.controller__buttons}>
        <button onClick={props.start} className={classes.controller__startButton}>Start</button>
        <button onClick={props.reset} className={classes.controller__resetButton}>Reset</button>
      </div>
      <Control name="Golovi" property="goals" update={props.update}/>
      <Control name="Udarci u okvir" property="shotsOnGoal" update={props.update}/> 
      <Control name="Udarci van okvira" property="shots" update={props.update}/>
      <Control name="Zaleđa" property="offsides" update={props.update}/>
      <Control name="Faulovi" property="fouls" update={props.update}/>
      <Control name="Žuti kartoni" property="yellowCards" update={props.update}/>
      <Control name="Crveni kartoni" property="redCards" update={props.update}/>
    </div>
  )
}
export default Controller;