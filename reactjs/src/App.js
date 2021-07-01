import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Playground from "./Playground";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/playground">
            <Playground />
          </Route>
          <Route path="/">
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
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
