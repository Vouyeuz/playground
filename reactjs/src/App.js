import logo from "./logo.svg";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Welcome to our playing ground!</p>
              <a
                className="App-link"
                href="/playground"
                rel="noopener noreferrer"
              >
                Let's Rage!
              </a>
            </header>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
