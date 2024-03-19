import "./App.css";
import React, { useState, useEffect } from "react";
import Controller from "./components/Controller/Controller";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import IMAGES from "./assets/images/index";

function FootballScoreboard(props) {
  let { data } = props;
  let players1 = data.HajdukSplit.players;
  let players2 = data.DinamoZagreb.players;
  const initialvalues = {
    goals: 0,
    shots: 0,
    shotsOnGoal: 0,
    offsides: 0,
    fouls: 0,
    yellowCards: 0,
    redCards: 0,
  };
  const [events, setEvents] = useState([]);
  const [dataTeam1, setDataTeam1] = useState({
    ...initialvalues,
    name: "Hajduk",
    image: IMAGES.hajduk,
  });
  const [dataTeam2, setDataTeam2] = useState({
    ...initialvalues,
    name: "Dinamo",
    image: IMAGES.dinamo,
  });
  const [clock, setClock] = useState({ minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setClock((prevClock) => {
          if (prevClock.seconds === 59) {
            if (prevClock.minutes === 89) {
              clearInterval(interval);
              setIsRunning(false);
              return { minutes: 90, seconds: 0 };
            }
            return { minutes: prevClock.minutes + 1, seconds: 0 };
          }
          return { ...prevClock, seconds: prevClock.seconds + 1 };
        });
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  function startClock() {
    if (clock.minutes === 90) return;
    setIsRunning(true);
  }

  function resetClock() {
    setIsRunning(false);
    setClock({ minutes: 0, seconds: 0 });
    setDataTeam1({ ...initialvalues, name: "Hajduk", image: IMAGES.hajduk });
    setDataTeam2({ ...initialvalues, name: "Dinamo", image: IMAGES.dinamo });
    setEvents([]);
  }
  function eventCreate(team, action) {
    let players = team === 1 ? players1 : players2;
    let player = players[Math.floor(Math.random() * players.length)];
    let newEvent = {
      team: team,
      player: player,
      action: action,
      time: clock.minutes + 1,
      image: IMAGES.football,
    };
    setEvents((events) => [...events, newEvent]);
  }
  function eventDelete(team, action) {
    setEvents((events) => {
      const lastEventIndex = events
        .slice()
        .reverse()
        .findIndex((event) => event.team === team);
      if (lastEventIndex !== -1) {
        const updatedEvents = [...events];
        updatedEvents.splice(events.length - 1 - lastEventIndex, 1);
        return updatedEvents;
      }
      return events;
    });
  }
  function updateStat(team, property, increment) {
    let setter;
    let data;
    if (!isRunning) {
      if (clock.minutes < 1) return alert("Game has not started yet");
      else return alert("Game is over");
    }
    if (property === "goals" && increment) eventCreate(team, "goal");
    if (property === "goals" && !increment) eventDelete(team, "goal");
    if (team === 1) {
      setter = setDataTeam1;
      data = dataTeam1;
    } else {
      setter = setDataTeam2;
      data = dataTeam2;
    }
    setter((prevData) => ({
      ...prevData,
      [property]: increment
        ? prevData[property] + 1
        : prevData[property] === 0
        ? 0
        : prevData[property] - 1,
      ...(property === "shotsOnGoal" && {
        shots: increment
          ? prevData.shots + 1
          : prevData.shots === 0
          ? 0
          : prevData.shots - 1,
      }),
    }));
  }

  return (
    <div className="footballScoreboard">
      <Scoreboard
        team1={dataTeam1}
        team2={dataTeam2}
        clock={clock}
        events={events}
      />
      <Controller update={updateStat} start={startClock} reset={resetClock} />
    </div>
  );
}
export default FootballScoreboard;
