import React, { useState, useEffect } from "react";
import "../styles/days.css";
export default function DayHeader(props) {
  useEffect(() => {}, []);

  return (
    <div className="desc-headers">
      <div className="day-header">
        <p>Day {props.dayNumber} (reps*sets)</p>
      </div>
      <div className="warm-ups-header">
        <p>Warm-Ups:</p>
      </div>
      <div className="working-weights-header">
        <p>Working Weights:</p>
      </div>
    </div>
  );
}
