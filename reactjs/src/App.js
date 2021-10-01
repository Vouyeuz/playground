import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { JobDetailPage, JobSearchPage, LoginPage } from "./Pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/job-detail">
            <JobDetailPage />
          </Route>
          <Route exact path="/job-search">
            <JobSearchPage />
          </Route>
          <Route exact path="/">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
