import "./App.css";
import Weeks from "./programs/Weeks";
import Day from "./programs/Day";
import Home from "./Home";
import Register from "./Login/components/Register";
import Login from "./Login/components/Login";
import Profile from "./programs/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Profiler } from "react";
import Header from "./layout/Header";
import { UserDataProvider } from "./Login/components/UserDataContext";

function App() {
  return (
    <UserDataProvider>
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/login" exact component={Login} />
              <Route path="/home" component={Home} />
              <Route path="/weeks" component={Weeks} />
              <Route path="/day" component={Day} />
              <Route path="/register" component={Register} />
              {
                // <Route path="/profile" exact component={Profile} />
              }
              <Route path="/profile/:id" component={Profile} />
              <Route path="/" render={() => <div>404 page not found</div>} />
            </Switch>
          </div>
        </div>
      </Router>
    </UserDataProvider>
  );
}

export default App;
