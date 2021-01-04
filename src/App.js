import "./App.css";
import Weeks from "./programs/Weeks";
import Day from "./programs/Day";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/weeks" component={Weeks} />
          <Route path="/day" component={Day} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
