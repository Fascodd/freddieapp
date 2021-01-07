import React from "react";
import "./styles/home.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="container">
      <div className="weeks-container">
        <Link
          to={{
            pathname: "/weeks",
          }}
        >
          <p>link to weeks</p>
        </Link>
      </div>
    </div>
  );
}
const workouts = [
  { day_num: "1", program_id: "21313", week_id: "431" },
  { day_num: "2", program_id: "21314", week_id: "431" },
  { day_num: "3", program_id: "21315", week_id: "431" },
  { day_num: "4", program_id: "21316", week_id: "431" },
  { day_num: "5", program_id: "21317", week_id: "431" },
  { day_num: "6", program_id: "21318", week_id: "431" },
  { day_num: "7", program_id: "21319", week_id: "431" },
];
