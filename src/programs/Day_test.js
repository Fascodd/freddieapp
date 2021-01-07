import exercises from "../db_dummy_data/exercises";
import React, { useState, useEffect } from "react";

export default function Day_Test(props) {
  const [dayId, setDayId] = useState(props.match.params.id);

  useEffect(() => fetchExerciseData, []);

  async function fetchExerciseData() {
    const fetchData = await fetch("../db_dummy_data/exercises");
    await console.log(fetchData);
  }
  return <div>rendering day id: {dayId}</div>;
}
