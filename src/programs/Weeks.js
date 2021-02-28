import React, { useState } from "react";
import "../styles/weeks.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Day from "./Day";
const workouts = [
  { day_num: "1", program_id: "21313", week_id: "431" },
  { day_num: "2", program_id: "21314", week_id: "431" },
  { day_num: "3", program_id: "21315", week_id: "431" },
  { day_num: "4", program_id: "21316", week_id: "431" },
  { day_num: "5", program_id: "21317", week_id: "431" },
  { day_num: "6", program_id: "21318", week_id: "431" },
  { day_num: "7", program_id: "21319", week_id: "431" },
];

export default function Weeks(props) {
  const days = workouts.map((day, i) => {
    return (
      <div id={day.program_id} key={i} className="day">
        <h2 className="day-text"> Workout {day.day_num}</h2>

        <button>to workout</button>
      </div>
    );
  });

  return (
    <div className="weekListContainer">
      <div className="weekList">{days}</div>
    </div>
  );
}
