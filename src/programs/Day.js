import React, { useState, useEffect } from "react";
import "../styles/days.css";
import DayHeader from "./DayHeader";

//exercise_type_id refers to clean and jerk/clean deadlifts, respectfully
//exercise and sets tables are joined in this example
const exercises = [
  {
    id: "10",
    program_id: "21313",
    exercise_type_id: "3",
    workout_id: "3",
    workout_phase: "0",
    exercise_order: "1",
    notes: "clean and jerk notes",
    target: "40",
    actual: "",
    reps: "2",
    times: "2",
    order_num: "1",
  },
  {
    id: "11",
    program_id: "21313",
    exercise_type_id: "3",
    workout_id: "3",
    workout_phase: "0",
    exercise_order: "1",
    notes: "clean and jerk notes",
    target: "50",
    actual: "",
    reps: "2",
    times: "1",
    order_num: "2",
  },
  {
    id: "12",
    program_id: "21313",
    exercise_type_id: "3",
    workout_id: "3",
    workout_phase: "0",
    exercise_order: "1",
    notes: "clean and jerk notes",
    target: "55",
    actual: "",
    reps: "2",
    times: "1",
    order_num: "2",
  },
  {
    id: "13",
    program_id: "21313",
    exercise_type_id: "3",
    workout_id: "3",
    workout_phase: "1",
    exercise_order: "1",
    notes: "clean and jerk notes",
    target: "60",
    actual: "",
    reps: "2",
    times: "1",
    order_num: "2",
  },
  {
    id: "14",
    program_id: "21313",
    exercise_type_id: "3",
    workout_id: "3",
    workout_phase: "2",
    exercise_order: "1",
    notes: "clean and jerk notes",
    target: "",
    actual: "",
    reps: "2",
    times: "1",
    order_num: "2",
  },
  {
    id: "15",
    program_id: "21313",
    exercise_type_id: "3",
    workout_id: "3",
    workout_phase: "3",
    exercise_order: "1",
    notes: "clean and jerk notes",
    target: "",
    actual: "",
    reps: "2",
    times: "1",
    order_num: "2",
  },
  {
    id: "16",
    program_id: "21313",
    exercise_type_id: "3",
    workout_id: "3",
    workout_phase: "4",
    exercise_order: "1",
    notes: "clean and jerk notes",
    target: "",
    actual: "",
    reps: "2",
    times: "1",
    order_num: "2",
  },

  {
    id: "20",
    program_id: "21313",
    exercise_type_id: "23",
    workout_id: "4",
    workout_phase: "0",
    exercise_order: "2",
    notes: "clean deadlift notes",
    target: "60",
    actual: "",
    reps: "2",
    times: "1",
    order_num: "1",
  },
  {
    id: "21",
    program_id: "21313",
    exercise_type_id: "23",
    workout_id: "4",
    workout_phase: "0",
    exercise_order: "2",
    notes: "clean deadlift notes",
    target: "70",
    actual: "",
    reps: "2",
    times: "1",
    order_num: "1",
  },
  {
    id: "22",
    program_id: "21313",
    exercise_type_id: "23",
    workout_id: "4",
    workout_phase: "1",
    exercise_order: "2",
    notes: "clean deadlift notes",
    target: "85",
    actual: "",
    reps: "2",
    times: "1",
    order_num: "1",
  },
  {
    id: "23",
    program_id: "21313",
    exercise_type_id: "23",
    workout_id: "4",
    workout_phase: "2",
    exercise_order: "2",
    notes: "clean deadlift notes",
    target: "85",
    actual: "",
    reps: "2",
    times: "1",
    order_num: "1",
  },
  {
    id: "24",
    program_id: "21313",
    exercise_type_id: "23",
    workout_id: "4",
    workout_phase: "3",
    exercise_order: "2",
    notes: "clean deadlift notes",
    target: "85",
    actual: "",
    reps: "2",
    times: "1",
    order_num: "1",
  },
  {
    id: "25",
    program_id: "21313",
    exercise_type_id: "23",
    workout_id: "4",
    workout_phase: "4",
    exercise_order: "2",
    notes: "clean deadlift notes",
    target: "85",
    actual: "",
    reps: "2",
    times: "1",
    order_num: "1",
  },
];
//These tables are seperate
const sets = [
  {
    exercise_id: "10",
    target: "40",
    actual: "",
    reps: "2",
    times: "2",
    order_num: "1",
  },
];

export default function Day(props) {
  const [workoutrow, setWorkout] = useState([]);
  useEffect(() => {
    setWorkout(workouts());
  }, []);

  //Get number of total unique exercises
  const numOfExercises = exercises.reduce((acc, current_exercise) => {
    return current_exercise.exercise_order > acc
      ? (acc = current_exercise.exercise_order)
      : (acc = acc);
  }, 0);

  const workouts = () => {
    //Empty array for pushing workout rows to
    let rows = [];
    //Iterate over the number of total exercises
    for (let i = 1; i <= numOfExercises; i++) {
      //Determine the number of workout phases for a given exercise
      const filteredExercises = exercises
        .filter((exercises) => exercises.program_id == props.location.state.id)
        .filter((exercise) => {
          return exercise.exercise_order == i;
        });
      //Get the notes for the first element in the filtered exercises Array
      const currentExerciseName = filteredExercises[0].notes;
      //Get number of workoutPhases for current exercise
      const numOfWorkoutPhases = filteredExercises.reduce(
        (acc, current_exercise) => {
          return current_exercise.workout_phase > acc
            ? (acc = current_exercise.workout_phase)
            : (acc = acc);
        },
        0
      );
      //Array for workout divs
      let workoutAr = [];
      //iterate through all phase of a workout
      for (
        let workoutPhase = 0;
        workoutPhase <= numOfWorkoutPhases;
        workoutPhase++
      ) {
        // create divs for the number of sets included in a given workout phase
        const currentWPSets = filteredExercises
          .filter((curr) => curr.workout_phase == workoutPhase)
          .map((curr) => {
            if (curr.target == "" && curr.workout_phase == numOfWorkoutPhases) {
              return <div className="rep empty last-workout"></div>;
            } else if (curr.target === "") {
              return <div className="rep empty"></div>;
            } else
              return (
                <div className="rep">{` ${curr.target} / ${curr.reps} * ${curr.times},`}</div>
              );
          });
        //container for the sets of a workout phase
        workoutAr.push(
          <div className="workout" id={workoutPhase}>
            {currentWPSets}
          </div>
        );
      }
      workoutAr.unshift(
        <div className="exercise-type">{currentExerciseName} 3 * 2</div>
      );

      rows.push(workoutAr);
    }
    const theseRows = rows.map((row) => {
      return <div className="workout-container"> {row} </div>;
    });
    return theseRows;
  };

  return (
    <div className="day-container">
      <div className="program-container">
        <DayHeader dayNumber={props.location.state.dayNumber} />
        {workoutrow}
      </div>
    </div>
  );
}
